const path = require ( 'path' )
const fs = require('fs-extra')

module.exports = (options = {}) => {
    return async context => {
        let config = "const config = " + JSON.stringify(context.data) + '\nexport default config'
        let purgeCSS = JSON.stringify(context.data.purge.join(','))
        let purge = "purge = [" + purgeCSS + "]" + '\nmodule.exports = { purge }'
        //console.log ( purge )
        fs.writeFileSync ( path.resolve(context.app.get('generator')) + '/config.js' , config )
        fs.writeFileSync ( path.resolve(context.app.get('generator')) + '/purge.js' , purge )
    }
}