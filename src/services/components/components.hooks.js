

const components = require('../../hooks/components');

module.exports = {
  before: {
    all: [],
    find: [function(context){
      console.log ( context.params)
    }],
    get: [],
    create: [components()],
    update: [],
    patch: [components()],
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
