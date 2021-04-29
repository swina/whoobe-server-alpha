const dauria = require ( 'dauria' )
const uploadimage = require ( '../../hooks/upload.uploadimage.js')
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ uploadimage() ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
