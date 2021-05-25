const writePM2Config = require ( '../../hooks/projects.writePM2Config')
const multiProjects = require ( '../../hooks/multiProjects')
const { authenticate } = require('@feathersjs/authentication').hooks;
module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [multiProjects()],
    get: [],
    create: [writePM2Config()],
    update: [writePM2Config()],
    patch: [writePM2Config()],
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
