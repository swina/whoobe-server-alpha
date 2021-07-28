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
      //context.app.service ( 'generate' ).create ( { data: 'Pages to publish : \n' + context.data.pagesToPublish.filter(slug => !slug.includes('store/category') && slug != 'store' ).join('\n') } )
      console.log ( 'Collecting articles media, fonts and purge settings')
      context.app.service ( 'generate' ).create ( 
        { data: 'Pages to publish : \n' + context.data.resources.links.join('\n') } 
      )
      context.app.service ( 'generate' ).create ( { data: '\nLocal building mode : Website\n' } )
      
      //get articles to publish, limit is set in ./config/default.json => articles_limit
      
      //let slugs = context.data.pagesToPublish.filter(slug => !slug.includes('store/category') && slug != 'store' )
      let slugs = context.data.resources.links
      const articles = await context.app.service('articles').find({
         query: {
            slug : { $in : slugs },
            $select: [ 'title' , 'slug' , 'excerpt' , 'content' , 'image' , 'seo_title' , 'seo_description' , 'uploads' , 'blocks' , 'homepage' ]
         }
      })
      context.app.service ( 'generate' ).create ( { data: articles.data.length + ' articles found\n'})

     
      //get default template for the articles
      const template = await context.app.service('components').find ( {
        query : {
          default: true,
          loop: false
        }
      })


      
      //collect all images, fonts and purgeCSS for all articles
      //get the article images
      let pagesImages = []
      let pagesFonts = []
      let pagesPurge = []
      let store = false
      articles.data.forEach ( article => {
        context.app.service ( 'generate' ).create ( { data: 'Collecting data for : ' + article.title + '\n' } )
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
          context.app.service ( 'generate' ).create ( { data: article.slug + '\n' } )
          if ( article.blocks.uploads ){
            article.blocks.uploads.forEach ( upload => {
              context.app.service ('generate').create ( { data: article.title + '  => image => ' + upload + '\n' })
              pagesImages.push ( upload )
            })
          }
          if ( article.blocks.purge.length ){
            article.blocks.purge.forEach ( purge => {
              pagesPurge.push ( purge )
            })
          }
          if ( article.blocks.fonts ){
            article.blocks.fonts.forEach ( font => {
              pagesFonts.push ( font )
            })
          }
          if ( article.blocks.store ){
            store = true
            context.data.blocks.store = true
          }
        }

      })
      //check if store has to be generated
      if ( context.data.blocks.store ){
        //collect build info for store (images, CSS purge and fonts used)
        const article = await  context.app.service('articles').find ( { query: { store: true } } )
        console.log ( article )
        pagesImages = [ ...pagesImages , ...article.data[0].blocks.uploads ]
        pagesPurge = [ ...pagesPurge , ...article.data[0].blocks.purge ]
        pagesFonts = [ ...pagesFonts , ...article.data[0].blocks.fonts ]
      }

      //create project destination folder is a different destination folder has been defined if doesn't exists
      if ( context.data.target ) await fs.ensureDir ( path.resolve(context.data.target) )
      
      
      //merge default template build info
      if ( template.uploads ) pagesImages = [...pagesImages , ...template.uploads ]
      if ( template.fonts ) pagesFonts = [...pagesFonts , ...template.fonts ]
      if ( template.purge ) pagesPurge = [...pagesPurge , ...template.purge ]
      
      
      //merge & eliminate duplicates from build info arrays
      context.data.resources.uploads = [...new Set ( [ ...context.data.resources.uploads , ...pagesImages ])]
      context.data.resources.fonts = [...new Set ( [ ...context.data.resources.fonts , ...pagesFonts ] ) ]
      context.data.resources.purge = [...new Set ( [ ...context.data.resources.purge , ...pagesPurge ] ) ]  
      
      context.app.service ( 'generate' ).create ( { data: context.data.resources.pages.length + ' articles images found\n'})
      
      // copy images to upload to nuxt static folder
      let uploads = context.data.resources.uploads

      //check if website has store, if not remove all products images from copy to the static folder
      if ( !context.data.resources.store ){
        uploads = context.data.resources.uploads.filter ( image => !image.includes('/products/') )
      }
      
      //empty nuxtjs ./static/uploads folder
      await fs.emptyDir ( path.resolve ( nuxt ) + '/static/uploads' )
      
      //populate nuxtjs ./static/uploads folder with the build images used
      await uploads.forEach ( (image,i) => {
        
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

      //run nuxtjs generate command
      process.chdir( path.resolve ( nuxt ) )
        const cmd = 'yarn generate'
        const myShellScript = exec("yarn generate",{detached:true});
        myShellScript.stdout.on('data', (data)=>{
          //send info to client
          context.app.service('generate').create({ data: new Date().toLocaleString() + ' => '  + data})
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
    

      return context;
    }
  };
};
