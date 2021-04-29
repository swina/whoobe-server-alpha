// Initializes the `uploads-delete` service on path `/uploads/delete`
const { UploadsDelete } = require('./uploads-delete.class');
const hooks = require('./uploads-delete.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/uploads/delete', new UploadsDelete(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('uploads/delete');

  service.hooks(hooks);
};
