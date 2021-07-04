const unirest = require('unirest')
const { exec , spawn } = require ( 'child_process' )
const path = require ( 'path' )
const fs = require('fs-extra')
const slash = require ( 'slash' )
const  jp  = require ( 'jsonpath' )
const https = require('https')
var previewExec

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    //kill any preview
    if ( previewExec ){
      previewExec.kill()
    }
    const nuxt = slash(path.resolve(context.app.get('nuxt')))
    //preview ( yarn serve )
    if ( context.params.query.preview ){
      //const nuxt = slash(path.resolve(context.app.get('nuxt')))
      process.chdir( path.resolve ( nuxt ) )
      previewExec = exec("yarn serve",{detached:true});
      return context
    }

    if ( context.data ){
      console.log ( 'Collecting articles media, fonts and purge settings')
      context.app.service ( 'generate' ).create ( { data: 'Local building mode : Website\n' } )
      //get articles to publish, limit is set in ./config/default.json => articles_limit
      const articles = await context.app.service('articles').find({
        query: {
           $limit: 50,
           publish: true,
           $select: [ 'title' , 'slug' , 'excerpt' , 'content' , 'image' , 'seo_title' , 'seo_description' , 'uploads' , 'blocks' , 'homepage' ]
        }
      })
      console.log ( 'articles=> ' , articles.total )
      //message total articles found 
      context.app.service ( 'generate' ).create ( { data: articles.total + ' articles found\n'})

     
      //get default template for the articles
      const template = await context.app.service('components').find ( {
        query : {
          default: true,
          loop: false
        }
      })

      console.log ( template )

      
      //collect all images, fonts and purgeCSS for all articles
      //get the article images
      let pagesImages = []
      let pagesFonts = []
      let pagesPurge = []
      articles.data.forEach ( article => {
        // let pageDir = fs.ensureDir ( path.resolve(context.app.get('vite')) + '/public/' + article.slug )
        if ( article.image ){
          if ( !article.image.url.includes('//') ){
            pagesImages.push(article.image.url)
          }
        }
        if ( article.uploads ){
          article.uploads.forEach ( img => {
            pagesImages.push ( img )
          })
        }
        if ( article.blocks ){
          if ( article.blocks.uploads ){
            pagesImages = [...pagesImages,...article.blocks.uploads]
          }
          if ( article.blocks.purge ){
            pagesPurge = [...pagesPurge , ...article.blocks.purge ]
          }
          if ( article.blocks.fonts ){
            pagesFonts = [...pagesFonts , ...article.blocks.fonts ]
          }
        }
      })
    
      //create destination folder if doesn't exists
      if ( context.data.target ) await fs.ensureDir ( path.resolve(context.data.target) )
      
      if ( template.uploads ) pagesImages = [...pagesImages , ...template.uploads ]
      if ( template.fonts ) pagesFonts = [...pagesFonts , ...template.fonts ]
      if ( template.purge ) pagesPurge = [...pagesPurge , ...template.purge ]

      context.data.blocks.uploads = [...new Set ( [ ...context.data.blocks.uploads , ...pagesImages ])]
      context.data.blocks.fonts = [...new Set ( [ ...context.data.blocks.fonts , ...pagesFonts ] ) ]
      context.data.blocks.purge = [...new Set ( [ ...context.data.blocks.purge , ...pagesPurge ] ) ]  

    //console.log ( articlesUploads , articlesFonts , articlesPurge )
      context.app.service ( 'generate' ).create ( { data: pagesImages.length + ' articles images found\n'})
      // context.app.service ( 'generate' ).create ( { data: articlesFonts.length + ' articles fonts found\n'})

      await context.data.blocks.uploads.forEach ( (image,i) => {
        fs.copy ( path.resolve( context.app.get('public') ) + image , path.resolve ( nuxt ) + '/static' + image )
          .then ( () => {
            context.app.service('generate').create ( { data: '/static' + image + ' uploaded.\n'} )
        })
          .catch(err => {
            context.app.service('generate').create ( { error: 'Upload error ' + image + '\n' } )
            console.error(err)
            errors++
        }) 
      })

      process.chdir( path.resolve ( nuxt ) )
        const cmd = 'yarn generate'
        const myShellScript = exec("yarn generate",{detached:true});
        myShellScript.stdout.on('data', (data)=>{
          //send info to client
          context.app.service('generate').create({ data: context.data.title + ' => '  + data})
        });
        myShellScript.stderr.on('data', (data)=>{
          //send errors info to client
          context.app.service('generate').create({ error: data})
          console.error(data);
        });
        myShellScript.on('exit' , (data) => {
          //build ended
          console.log ( 'Generation done' , data )
          context.app.service('generate').create({ data: 'Whoobe Site Generation done!\n' } )
          context.app.service('generate').create ( { data: 'done\n'} )
          previewExec = exec ( 'yarn start' , {detached:true} )
        })  
    // project.uploads = [...new Set ( [...project.uploads , ...articlesUploads ]) ]
    // project.fonts = [...new Set ( [...project.fonts , ...articlesFonts ]) ]
    // project.purge = [...new Set ( [...project.purge , ...articlesPurge ]) ]
    
    // context.app.service ( 'projects' ).create ( project ).then ( res => {
    //   console.log ( res )
    // })

    return context;
    }
  };
};
