// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const unirest = require('unirest')
// eslint-disable-next-line no-unused-vars
const { exec , spawn } = require ( 'child_process' )
const path = require ( 'path' )
const fs = require('fs-extra')
const slash = require ( 'slash' )
const  jp  = require ( 'jsonpath' )
const https = require('https')
var previewExec

async function projectResources( context , project ){
  if ( !project ) return null
  const  jp  = require ( 'jsonpath' )
  context.app.service ( 'generate' ).create ( { data: 'Collecting resourses' } )
  let json = project.component.json
  let usedFonts = []
  let usedImages = []
  let purgeClasses = []
  let fonts = await jp.query ( json , '$..blocks[?(@.style.includes("font-family"))]' )
  //usedFonts.push ( fonts.style )
  fonts.forEach ( font => {
    font.style.includes ( 'font-family') ?
    usedFonts.push ( font.style.replace('font-family:','') ) : null
  })
  //let fonts = jp.query ( json , '$..blocks..[?(@.style>"font-family"]' )
  let images = jp.query ( json , '$..blocks..image.url' )
  images.forEach(img=>
      !img.includes('//') ?
          usedImages.push(img) : null
  )
  let classes = await jp.query ( json , '$..blocks..css' )
  
  classes.forEach ( classe => {
      let generalCSS 
      if ( classe.hasOwnProperty('css') ){
          generalCSS = classe.css.split(' ')
          let containerCSS = classe.container.split( ' ' )
          generalCSS.forEach ( css => {
              if ( css ) purgeClasses.push ( css )
          })
          containerCSS.forEach ( css => {
              if ( css ) purgeClasses.push ( css )
          })
          
          
      } else {
          generalCSS = classe.split(' ')
          generalCSS.forEach ( css => {
              if ( css ) purgeClasses.push ( css )
          })
      }
      let containers = jp.query ( json , '$..blocks..container' )
      containers.forEach( container => {
          let cntrCSS = container.split(' ')
          cntrCSS.forEach ( css => {
              if ( css ) purgeClasses.push ( css )
          })
      })
  })
  let plugins = [...new Set ( jp.query ( json , '$..blocks..path') )]
  plugins.includes ( 'store/whoobe/store') ? project.store = true : project.store = false
  if ( project.component.json.fontFamily ){
      project.fonts.push ( project.component.json.fontFamily )
  }
  if ( project.store ){
      context.app.service ( 'products' ).find( {
          query : {
              $limit: 200,
              type: 'product'
          }
      }).then ( res => {
          res.data.forEach ( product => {
              Array.isArray(product.assets) ?
                  !product.assets[0].includes('//') ?
                      usedImages.push(product.assets[0]) : null :
                          !product.assets.includes('//') ?
                              usedImages.push ( product.assets ) : null
                          
          })
          project.fonts = [ ...new Set(usedFonts) ]
          project.purge = [ ...new Set(purgeClasses) ]
          project.uploads = [ ...new Set(usedImages) ]
          return project
      })
      
  } else {
      project.fonts = [ ...new Set(usedFonts) ]
      project.purge = [ ...new Set(purgeClasses) ]
      project.uploads = [ ...new Set(usedImages) ]
      return project
  }
  
}

module.exports = (options = {}) => {
  return async context => {
    if ( previewExec ){
      previewExec.kill()
    }
    if ( context.params.query.preview ){
      const vite = slash(path.resolve(context.app.get('vite')))
      process.chdir( path.resolve ( vite ) )
      const cmd = 'yarn preview'
      previewExec = exec("yarn preview",{detached:true});
      return context
    }
    if ( context.data.project ){
      
      const workspace = slash(path.resolve ( context.app.get('workspace') ) )
      const generator = slash(path.resolve ( context.app.get('generator') ) )//'../workspace/' ))
      const vite = slash(path.resolve(context.app.get('vite')))
      
      let purgeCSS = JSON.stringify(context.data.project.purge.join(','))
      let purge = "purge = [" + purgeCSS + "]" + '\nmodule.exports = { purge }'
      
      if ( context.data.project.local ){
        fs.writeFileSync ( path.resolve(context.app.get('vite')) + '/purge.js' , purge )
        fs.writeFileSync ( path.resolve(context.app.get('vite')) + '/config.json' , JSON.stringify(context.data.project) )
      }
      fs.writeFileSync ( path.resolve(context.app.get('public')) + '/purge.js' , purge )
      fs.writeFileSync ( path.resolve(context.app.get('public')) + '/config.json' , JSON.stringify(context.data.project) )
      
      if ( context.data.store ) doStore()

      //local deployment
      if ( context.data.project.uploads && context.data.project.local ){
          fs.removeSync( path.resolve ( vite ) + '/public/uploads'  )
          context.app.service('generate').create ( { data: 'Uploading ' + context.data.project.uploads.length + ' assets ...\n'} )
          let errors = 0
          context.data.project.uploads.forEach ( (image,i) => {
            fs.copy ( path.resolve( context.app.get('public') ) + image , path.resolve ( vite ) + '/public' + image ).then ( () => {
              context.app.service('generate').create ( { data: '/public' + image + ' uploaded.\n'} )
            })
            .catch(err => {
              context.app.service('generate').create ( { error: 'Upload error ' + image + '\n' } )
              console.error(err)
              errors++
            })  
          })
      }

      if ( context.data.project.local ){
        process.chdir( path.resolve ( vite ) )
        const cmd = 'yarn build'
        //const project = vite
        const myShellScript = exec("yarn build",{detached:true});
      
        myShellScript.stdout.on('data', (data)=>{

          context.app.service('generate').create({ data: context.data.project.name + ' => '  + data})
          // do whatever you want here with data
        });
        myShellScript.stderr.on('data', (data)=>{
          context.app.service('generate').create({ error: data})
          console.error(data);
        });
        myShellScript.on('exit' , (data) => {
          console.log ( 'Generation done' , data )
          context.app.service('generate').create({ data: 'Whoobe Site Generation done!\n' } )
          context.app.service('generate').create ( { data: 'done\n'} )
        })  
          //fs.removeSync( path.resolve ( workspace , context.data.project ) + '/dist/uploads'  )
          
        if ( context.data.commit ) doCommit()
        
        // if ( context.data.commit ){
        //   const options = {
        //     hostname: context.app.get ( 'vite_deploy_hook' ),
        //     port: 443,
        //     path: context.app.get ( 'vite_deploy_path' ),
        //     method: 'POST',
        //   }
        //   const req = https.request( options, res => {
        //     console.log(`statusCode: ${res.statusCode}`)
            
        //     res.on('data', d => {
        //       context.app.service ( 'generate' ).create ( { data: d })
        //     })
        //   })
        // }

        function doCommit(){
          console.log ( 'committing project' )
          const commitMe = exec('git add .')
          commitMe.stdout.on('data', (data)=>{
            context.app.service('generate').create({ data: data})
          });
          commitMe.on('exit' , (data) => {
            console.log ( data )
            const commitChanges = exec ( 'git commit -m "Another release"' )
            commitChanges.stdout.on('data',(data)=>{
              context.app.service('generate').create ( { data: data })
            })
            commitChanges.on ( 'exit' , (data) => {
              console.log ( data )
              const commitPush = exec ( 'git push' )
              commitPush.stdout.on ( 'data' , (data) => {
                context.app.service ( 'generate' ).create ( { data: data })
              })
              commitPush.on ( 'exit' , (data) => {
                context.app.service ('generate').create ({ data:  'Project committed' } )
              })
            })
          })
        } 
      } 
      
      

      function doStore(){
        let store = {}
        context.app.service ( 'products' ).find ( { query : {
          $limit : 200,
          type: 'product',
          $sort : { name: 1 }
        }}).then ( res => {
          store.products = res
          context.app.service ( 'products' ).find ( { query : {
            $limit: 300,
            type: 'variation'
          }}).then ( variations =>{
            store.variations = variations
            context.app.service ( 'categories' ).find ( 
              { query :
                {
                  $limit: 50,
                  type: 'product',
                  $sort : { name: 1 }
                }
              }).then ( categories => {
                store.categories = categories
                //let storeData = "const store = " + JSON.stringify(store) + '\nexport default store'
                if ( context.data.project.local ){
                  fs.writeFileSync ( path.resolve(context.app.get('vite')) + '/public/store.json' , JSON.stringify(store) )
                  fs.writeFileSync ( path.resolve(context.app.get('public')) + '/public/store.json' , JSON.stringify(store) )
                }
            })
          })
        })
      }
    }
    return context
    
  };
};


// // Use this hook to manipulate incoming or outgoing data.
// // For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// const unirest = require('unirest')
// // eslint-disable-next-line no-unused-vars
// const { exec , spawn } = require ( 'child_process' )
// const path = require ( 'path' )
// const fs = require('fs-extra')
// const slash = require ( 'slash' )
// const  jp  = require ( 'jsonpath' )
// var previewExec
// async function projectResources( context , project ){
//   if ( !project ) return null
//   const  jp  = require ( 'jsonpath' )
//   context.app.service ( 'generate' ).create ( { data: 'Collecting resourses' } )
//   let json = project.component.json
//   let usedFonts = []
//   let usedImages = []
//   let purgeClasses = []
//   let fonts = await jp.query ( json , '$..blocks[?(@.style.includes("font-family"))]' )
//   //usedFonts.push ( fonts.style )
//   fonts.forEach ( font => {
//     font.style.includes ( 'font-family') ?
//     usedFonts.push ( font.style.replace('font-family:','') ) : null
//   })
//   //let fonts = jp.query ( json , '$..blocks..[?(@.style>"font-family"]' )
//   let images = jp.query ( json , '$..blocks..image.url' )
//   images.forEach(img=>
//       !img.includes('//') ?
//           usedImages.push(img) : null
//   )
//   let classes = await jp.query ( json , '$..blocks..css' )
  
//   classes.forEach ( classe => {
//       let generalCSS 
//       if ( classe.hasOwnProperty('css') ){
//           generalCSS = classe.css.split(' ')
//           let containerCSS = classe.container.split( ' ' )
//           generalCSS.forEach ( css => {
//               if ( css ) purgeClasses.push ( css )
//           })
//           containerCSS.forEach ( css => {
//               if ( css ) purgeClasses.push ( css )
//           })
          
          
//       } else {
//           generalCSS = classe.split(' ')
//           generalCSS.forEach ( css => {
//               if ( css ) purgeClasses.push ( css )
//           })
//       }
//       let containers = jp.query ( json , '$..blocks..container' )
//       containers.forEach( container => {
//           let cntrCSS = container.split(' ')
//           cntrCSS.forEach ( css => {
//               if ( css ) purgeClasses.push ( css )
//           })
//       })
//   })
//   let plugins = [...new Set ( jp.query ( json , '$..blocks..path') )]
//   plugins.includes ( 'store/whoobe/store') ? project.store = true : project.store = false
//   if ( project.component.json.fontFamily ){
//       project.fonts.push ( project.component.json.fontFamily )
//   }
//   if ( project.store ){
//       context.app.service ( 'products' ).find( {
//           query : {
//               $limit: 200,
//               type: 'product'
//           }
//       }).then ( res => {
//           res.data.forEach ( product => {
//               Array.isArray(product.assets) ?
//                   !product.assets[0].includes('//') ?
//                       usedImages.push(product.assets[0]) : null :
//                           !product.assets.includes('//') ?
//                               usedImages.push ( product.assets ) : null
                          
//           })
//           project.fonts = [ ...new Set(usedFonts) ]
//           project.purge = [ ...new Set(purgeClasses) ]
//           project.uploads = [ ...new Set(usedImages) ]
//           return project
//       })
      
//   } else {
//       project.fonts = [ ...new Set(usedFonts) ]
//       project.purge = [ ...new Set(purgeClasses) ]
//       project.uploads = [ ...new Set(usedImages) ]
//       return project
//   }
  
// }

// module.exports = (options = {}) => {
//   return async context => {
//     if ( previewExec ){
//       previewExec.kill()
//     }
//     if ( context.params.query.preview ){
//       const vite = slash(path.resolve(context.app.get('vite')))
//       process.chdir( path.resolve ( vite ) )
//       const cmd = 'yarn preview'
//       previewExec = exec("yarn preview",{detached:true});
//       return context
//     }
//     if ( context.data.project ){
//       // const proj = await projectResources ( context , context.data.project )
//       // console.log ( proj )
//       //const generator = slash(path.resolve(context.app.get('vite') ) )
//       //context.app.service ( 'generate' ).create ( { data: 'Collecting resources ...'})
//       const workspace = slash(path.resolve ( context.app.get('workspace') ) )
//       const generator = slash(path.resolve ( context.app.get('generator') ) )//'../workspace/' ))
//       //fs.copyFileSync ( slash(path.resolve ( workspace , context.data.project ) + '/config/config.js') ,  slash(workspace + '/config.js' ) )
//       const vite = slash(path.resolve(context.app.get('vite')))
      
//       //let config = "const config = " + JSON.stringify(context.data.project) + '\nexport default config'
//       let purgeCSS = JSON.stringify(context.data.project.purge.join(','))
//       let purge = "purge = [" + purgeCSS + "]" + '\nmodule.exports = { purge }'
      
//       //fs.writeFileSync ( path.resolve(context.app.get('generator')) + '/config.js' , config )
//       fs.writeFileSync ( path.resolve(context.app.get('vite')) + '/purge.js' , purge )
//       fs.writeFileSync ( path.resolve(context.app.get('vite')) + '/config.json' , JSON.stringify(context.data.project) )
//       fs.writeFileSync ( path.resolve(context.app.get('public')) + '/purge.js' , purge )
//       fs.writeFileSync ( path.resolve(context.app.get('public')) + '/config.json' , JSON.stringify(context.data.project) )
//       //fs.writeFileSync ( path.resolve(context.app.get('vite')) + '/config.js' , config )
//       fs.removeSync( path.resolve ( vite ) + '/public/uploads'  )
//       console.log ( context.data.project.uploads )  
//       if ( context.data.project.uploads ){
//           context.app.service('generate').create ( { data: 'Uploading ' + context.data.project.uploads.length + ' assets ...\n'} )
//           let errors = 0
//           context.data.project.uploads.forEach ( (image,i) => {
//             // fs.copy ( path.resolve( context.app.get('public') ) + image , path.resolve ( workspace , context.data.project ) + '/dist' + image ).then ( () => {
//             //   context.app.service('generate').create ( { data: image + ' uploaded.\n'} )
//             // })
//             fs.copy ( path.resolve( context.app.get('public') ) + image , path.resolve ( vite ) + '/public' + image ).then ( () => {
//               context.app.service('generate').create ( { data: '/public' + image + ' uploaded.\n'} )
//             })
//             .catch(err => {
//               context.app.service('generate').create ( { error: 'Upload error ' + image + '\n' } )
//               console.error(err)
//               errors++
//             })  
//           })
          
//       }
//       //if ( context.data.project.mode != 'single' ){
//       //  process.chdir( path.resolve ( generator ) )// "../" , "whoobe-nuxt/" ) )
//       //  const cmd = 'yarn generate'
//       //  const myShellScript = exec(cmd);
//       //  const project = generator
//       //} else {
//         process.chdir( path.resolve ( vite ) )
//         const cmd = 'yarn build'
//         //const project = vite
//         const myShellScript = exec("yarn build",{detached:true});
//       //}
      
//       myShellScript.stdout.on('data', (data)=>{

//         context.app.service('generate').create({ data: context.data.project.name + ' => '  + data})
//         // do whatever you want here with data
//       });
//       myShellScript.stderr.on('data', (data)=>{
//         context.app.service('generate').create({ error: data})
//         console.error(data);
//       });
//       myShellScript.on('exit' , (data) => {
//         console.log ( 'Generation done' , data )
//         context.app.service('generate').create({ data: 'Whoobe Site Generation done!\n' } )
//         context.app.service('generate').create ( { data: 'done\n'} )
        
//         //fs.removeSync( path.resolve ( workspace , context.data.project ) + '/dist/uploads'  )
        
//       if ( context.data.commit ) doCommit()
//       if ( context.data.store ) doStore()
//       function doCommit(){
//         console.log ( 'committing project' )
//         const commitMe = exec('git add .')
//         commitMe.stdout.on('data', (data)=>{
//           context.app.service('generate').create({ data: data})
//         });
//         commitMe.on('exit' , (data) => {
//           console.log ( data )
//           const commitChanges = exec ( 'git commit -m "Another release"' )
//           commitChanges.stdout.on('data',(data)=>{
//             context.app.service('generate').create ( { data: data })
//           })
//           commitChanges.on ( 'exit' , (data) => {
//             console.log ( data )
//             const commitPush = exec ( 'git push' )
//             commitPush.stdout.on ( 'data' , (data) => {
//               context.app.service ( 'generate' ).create ( { data: data })
//             })
//             commitPush.on ( 'exit' , (data) => {
//               context.app.service ('generate').create ({ data:  'Project committed' } )
//             })
//           })
//         })
//       } 
      
//       function doStore(){
//         let store = {}
//         context.app.service ( 'products' ).find ( { query : {
//           $limit : 200,
//           type: 'product',
//           $sort : { name: 1 }
//         }}).then ( res => {
//           store.products = res
//           context.app.service ( 'products' ).find ( { query : {
//             $limit: 300,
//             type: 'variation'
//           }}).then ( variations =>{
//             store.variations = variations
//             context.app.service ( 'categories' ).find ( 
//               { query :
//                 {
//                   $limit: 50,
//                   type: 'product',
//                   $sort : { name: 1 }
//                 }
//               }).then ( categories => {
//                 store.categories = categories
//                 //let storeData = "const store = " + JSON.stringify(store) + '\nexport default store'
//                 fs.writeFileSync ( path.resolve(context.app.get('vite')) + '/public/store.json' , JSON.stringify(store) )
//                 fs.writeFileSync ( path.resolve(context.app.get('public')) + '/public/store.json' , JSON.stringify(store) )
//             })
//           })
//         })
//       }
//       })
//     }
//     return context
//     // var apikey = context.params.query.apikey

//     // var request = unirest("GET", "https://whoobe-freelance.p.rapidapi.com/build");
//     // //"66c9ba4cbdmsha2fbddc93240028p1c3b4cjsn942726849945"
//     // request.headers({
//     //   "x-rapidapi-host": "whoobe-freelance.p.rapidapi.com",
//     //   "x-rapidapi-key": apikey,
//     //   "useQueryString": true
//     // });

//     // request.end(function (res) {
//     //   if (res.error) throw new Error(res.error);
//     //   console.log ( res )
//     //   console.log(res.body);
//     //   context.data = res.body
//     //   context.result = res.body
//     //   return context
//     // });
    
//   };
// };
