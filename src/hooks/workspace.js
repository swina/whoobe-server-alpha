// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
//const projects = require ( '../../whoobe/projects' )
const fs = require ( 'fs-extra' )
const path = require ( 'path' )
const slash = require ( 'slash' )
const workspace = path.resolve ( '../workspace/' )

module.exports = (options = {}) => {
  return async context => {
    
    //projects list
    if ( context.method === 'find' ){
      var projects = fs.readdirSync ( path.resolve ( workspace ) )
      projects = projects.filter ( project => {
        return !fs.statSync(path.resolve( workspace , project )).isFile() 
      })
      context.result = projects
    }
    
    //get single project info
    if ( context.method === 'get' ){
      console.log ( context.id )
      const project = require ( path.resolve ( workspace , context.id ) +  '/config/config.js' ) 
      context.result = project 
    }

    //update project configuration 
    if ( context.method === 'patch' ){
      let project = context.data
      project.dist = slash ( workspace + '/' + project.name + '/' + project.dist )
      const configString = 'const whoobe={ \nname: "' + project.name + '",\nurl : "' + project.url + '" ,\ndist : "' + project.dist + '" ,\nfonts: "' + project.fonts + '" ,\nuploads: ' + project.uploads + '}\nmodule.exports = whoobe'
      const writeConfig = await fs.writeFileSync ( path.resolve ( workspace , project.name ) + '/config/config.js' , configString )
    }
    return context;
  };
};
