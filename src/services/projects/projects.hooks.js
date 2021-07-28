//const writePM2Config = require ( '../../hooks/projects.writePM2Config')
//const multiProjects = require ( '../../hooks/multiProjects')
const { authenticate } = require('@feathersjs/authentication').hooks;
const saveConfig = require('../../hooks/projects/save.config.js')
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
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
