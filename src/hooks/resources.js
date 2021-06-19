// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const jp = require ( 'jsonpath' )

var purgedCSS = []

function cssArray(arr){
  arr.forEach ( classe => {
    let generalCSS 
    if ( typeof classe === 'string' ){
      generalCSS = classe.split(' ')
    } else {
      generalCSS = Object.values ( classe ).join (' ').split(' ')
    }
    generalCSS.forEach ( css => {
      css.length ? 
        purgedCSS.push ( css ) : null
    })
  })
  console.log ( purgedCSS )
  return 
}

module.exports = (options = {}) => {
  return async context => {
    if ( context.data.project ){
      let json = context.data.project.component.json
      //console.log ( context.data.project )
      let classes = await jp.query ( json , '$..blocks..css')
      //let extraClasses = await jp.query ( json , '$..blocks[?(@.css.length>0)]..css')
      await cssArray ( classes )
      //await cssArray ( extraClasses )
      console.log ( [...new Set(purgedCSS)] )
      context.result = [...new Set(purgedCSS)]
      return context
      // let purgeClasses = []
      // classes.forEach ( classe => {
      //     let generalCSS 
      //     if ( typeof classe === 'string' ){
      //       generalCSS = classe.split(' ')
      //     } else {
      //       generalCSS = Object.values ( classe ).join (' ').split(' ')
      //       console.log ( generalCSS )
      //     }

      //     generalCSS.forEach ( css => {
      //       css.length ? 
      //         purgeClasses.push ( css ) : null
      //     })
         
      //     if ( json.css ){
      //       let pageCSS = json.css.split(' ')
      //       pageCSS.forEach ( css => {
      //         if ( css )
      //           purgeClasses.push ( css )
      //       })
      //     }
      //     context.result = [...new Set(purgeClasses) ]
      //     return context
      // })
      
    }
  };
};
