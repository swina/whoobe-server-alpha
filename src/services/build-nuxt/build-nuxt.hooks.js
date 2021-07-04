const { authenticate } = require('@feathersjs/authentication').hooks;

const buildNuxt = require('../../hooks/build/build-nuxt');

module.exports = {
  before: {
    all: [ buildNuxt()],
    find: [],
    get: [authenticate('jwt')],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
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
