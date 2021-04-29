// Initializes the `upload` service on path `/upload/files`
const { Upload } = require('./upload.class');
const createModel = require('../../models/upload.model');
const hooks = require('./upload.hooks');
const multer = require('multer');
const multipartMiddleware = multer();

const blobService = require('feathers-blob');
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const fs = require('fs-blob-store');


// File storage location. Folder must be created before upload.
// Example: './uploads' will be located under feathers app top level.
const blobStorage = fs('./public/uploads');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };
  // Initialize our service with any options it requires
  app.use('/uploadfile', 
    // multer parses the file named 'uri'.
    // Without extra params the data is
    // temporarely kept in memory
    multipartMiddleware.single('file'),


    // another middleware, this time to
    // transfer the received file to feathers
    function(req,res,next){
        req.feathers.file = req.file;
        req.feathers.folder = req.body.folder ? req.body.folder : null
        req.feathers.thumbs = req.body.thumbs ? req.body.thumbs : null
        next();
    },
    new Upload(options, app)
    //blobService({Model: blobStorage,returnUri:false,returnBuffer:true})
  )
  // Get our initialized service so that we can register hooks
  const service = app.service('uploadfile');
  service.hooks(hooks);  
  
};
