const { authenticate } = require('@feathersjs/authentication').hooks;
const search = require('feathers-nedb-fuzzy-search')
module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [search(['name'])],
    get: [],
    create: [],
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
