

const whoobegenerate = require('../../hooks/whoobe.generate');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [whoobegenerate()],
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
