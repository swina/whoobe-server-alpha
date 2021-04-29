const elements = require('./elements/elements.service.js');
const settings = require('./settings/settings.service.js');
const plugins = require('./plugins/plugins.service.js');
const articles = require('./articles/articles.service.js');
const components = require('./components/components.service.js');
const uploadfile = require('./upload/upload.service.js');
const categories = require('./categories/categories.service.js');
const products = require('./products/products.service.js');
const media = require('./media/media.service.js');
const uploadsDelete = require('./uploads-delete/uploads-delete.service.js');
const uploadFile = require('./upload-file/upload-file.service.js');
//const collections = require('./collections/collections.service.js');
//const collectionCreate = require('./collection-create/collection-create.service.js');
//const collection = require('./collection/collection.service.js');
const datastore = require('./datastore/datastore.service.js');
const setup = require('./setup/setup.service.js');
const projects = require('./projects/projects.service.js');
const whoobeBuild = require('./whoobe-build/whoobe-build.service.js');
//const apikeys = require('./apikeys/apikeys.service.js');
const blocks = require('./blocks/blocks.service.js');
const users = require('./users/users.service.js');
const generate = require('./generate/generate.service.js');
const storeProduct = require('./store/product/product.service.js');
const workspace = require('./workspace/workspace.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(elements);
  app.configure(settings);
  app.configure(plugins);
  app.configure(articles);
  app.configure(components);
  app.configure(uploadfile);
  app.configure(categories);
  app.configure(products);
  app.configure(media);
  app.configure(uploadsDelete);
  app.configure(uploadFile);
  //app.configure(collections);
  //app.configure(collectionCreate);
  //app.configure(collection);
  app.configure(datastore);
  app.configure(setup);
  app.configure(projects);
  app.configure(whoobeBuild);
  //app.configure(apikeys);
  app.configure(blocks);
  app.configure(users);
  app.configure(generate);
  app.configure(storeProduct);
  app.configure(workspace);
};
