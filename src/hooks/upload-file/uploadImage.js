const { contentSecurityPolicy } = require('helmet');
const fs = require ( 'fs' )
const sharp = require ( 'sharp' )
const path = require ( 'path' )
const axios = require ( 'axios' )

module.exports = (options = {}) => {
    return async context => {
        let options = context.app.get('images')

        let imgPath = context.app.get('public') + '/uploads/'
            
        let thumbs = context.params.thumbs ? parseInt(context.params.thumbs) : 200
        let destination = context.data.folder ? 
            imgPath + context.data.folder + '/' : 
                imgPath
        let folder = context.data.folder ? '/uploads/' + context.data.folder + '/' : '/uploads/'
        console.log ( context.data )
        //upload file from URL
        if ( context.data.dataURL && context.data.name ){
            var regex = /^data:.+\/(.+);base64,(.*)$/;
            var matches = context.data.dataURL.match(regex);
            var ext = matches[1];
            var data = matches[2];
            var buffer = Buffer.from(data, 'base64');
            let imageName = context.data.name + '.' + options.format //'.webp'
            sharp(buffer).webp(options.options).toFile(destination + context.data.name + '.webp').then ( info => {
                let saveMedia = {
                    name: imageName,
                    caption: imageName,
                    alternativeText: imageName,
                    provider: 'local',
                    related: [],
                    width: info.width,
                    height: info.height,
                    size: info.size,
                    url: folder + imageName,
                    ext: 'webp', //imageName.substr(imageName.length - 4 ),
                    mime: 'image/' + info.format,
                    formats: null
                }
                console.log ( context.data )
                
                if ( !context.data.folder ){
                    context.app.service ( 'media' ).create ( saveMedia ).then ( result => {
                        context.data = result    
                        return context
                    })
                }
            }).catch ( error => {
                console.log ( error )
            })
        }
        if ( context.data.url && context.data.name ){
            let imageName = context.data.name + '.' + options.format //context.data.name + '.webp'
            const input = (await axios({ url: context.data.url , responseType: "arraybuffer" })).data;
            sharp(input).webp(options.options).toFile(destination +  imageName ).then ( info => {
                let format = {
                    ext: 'webp',
                    mime: 'image/' + options.format,
                    width: info.width,
                    height: info.height,
                    size: info.size,
                    url: folder + imageName
                }
                let saveMedia = {
                    name: imageName,
                    caption: imageName,
                    alternativeText: imageName,
                    provider: 'local',
                    related: [],
                    width: info.width,
                    height: info.height,
                    size: info.size,
                    url: folder + imageName,
                    ext: 'webp', //imageName.substr(imageName.length - 4 ),
                    mime: 'image/' + info.format,
                    formats: {
                        full : format
                    }
                }
                if ( options.multiple ){
                    const resize = size => sharp(input)
                        .resize( {width: size})
                        .toFile(destination + size + '_' + imageName).then( img =>{
                            console.log ( img , saveMedia )
                            saveMedia.formats[size] = {
                                ext: 'webp',
                                mime: saveMedia.mime,
                                width: size,
                                height: img.height,
                                size: img.size,
                                url: folder + size + '_' + imageName
                            }
                        }).catch ( error => {
                            console.log ( error )
                        });

                        Promise
                            .all(options.sizes.map(resize))
                            .then(() => {
                                console.log('complete');
                                if ( !context.data.folder ){
                                    context.app.service ( 'media' ).create ( saveMedia ).then ( result => {
                                        context.data = result    
                                        return context
                                    })
                                }  
                                
                            })
                } else {
                    if ( !context.data.folder ){
                        context.app.service ( 'media' ).create ( saveMedia ).then ( result => {
                            context.data = result    
                            return context
                        })
                    }
                }
            }).catch ( error => {
                console.log ( error )
            })
        }
        //Upload file with post file
        if (context.params.file){
            const file = context.params.file;
            let imageName = file.originalname
            imageName = imageName.replace(/ /g,'_')
            imageName = imageName.split('.').slice(0, -1).join('.') + '.webp' 
        
            sharp(file.buffer).webp(options).toFile(destination + imageName).then ( info => {
                console.log ( info )
                let format = {
                    ext: 'webp',
                    mime: 'image/' + options.format,
                    width: info.width,
                    height: info.height,
                    size: info.size,
                    url: folder + imageName
                }
                let saveMedia = {
                    name: imageName,
                    caption: imageName,
                    alternativeText: imageName,
                    provider: 'local',
                    related: [],
                    width: info.width,
                    height: info.height,
                    size: info.size,
                    url: folder + imageName,
                    ext: 'webp', //imageName.substr(imageName.length - 4 ),
                    mime: 'image/' + info.format,
                    formats: {
                        full : format
                    }
                }
                if ( options.multiple ){
                    const resize = size => sharp(file.buffer)
                        .resize( {width: size})
                        .toFile(destination + size + '_' + imageName).then( img =>{
                            console.log ( img , saveMedia )
                            saveMedia.formats[size] = {
                                ext: 'webp',
                                mime: saveMedia.mime,
                                width: size,
                                height: img.height,
                                size: img.size,
                                url: folder + size + '_' + imageName
                            }
                        }).catch ( error => {
                            console.log ( error )
                        });

                        Promise
                            .all(options.sizes.map(resize))
                            .then(() => {
                                console.log('complete');
                                if ( !context.data.folder ){
                                    context.app.service ( 'media' ).create ( saveMedia ).then ( result => {
                                        context.data = result    
                                        return context
                                    })
                                }  
                                
                    });
                } else {
                    if ( !context.data.folder ){
                        context.app.service ( 'media' ).create ( saveMedia ).then ( result => {
                            context.data = result    
                            return context
                        })
                    }
                }
            })
        }

    };
};    
