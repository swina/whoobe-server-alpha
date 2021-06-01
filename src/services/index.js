const articles = require('./articles/articles.service.js');
const blocks = require('./blocks/blocks.service.js');
const categories = require('./categories/categories.service.js');
const components = require('./components/components.service.js');
const elements = require('./elements/elements.service.js');
const datastore = require('./datastore/datastore.service.js');
const generate = require('./generate/generate.service.js');
const media = require('./media/media.service.js');
const mediaClean = require('./media-clean/media-clean.service.js');
const plugins = require('./plugins/plugins.service.js');
const products = require('./products/products.service.js');
const projects = require('./projects/projects.service.js');
const settings = require('./settings/settings.service.js');
const setup = require('./setup/setup.service.js');
const storeProducts = require('./store/product/product.service.js');
const uploadsDelete = require('./upload-delete/upload-delete.service.js');
const uploadFile = require('./upload-file/upload-file.service.js');
const users = require('./users/users.service.js');
const whoobeBuild = require('./whoobe-build/whoobe-build.service.js');
const workspace = require('./workspace/workspace.service.js');
const blockElements = require('./block-elements/block-elements.service.js');
//const uploadfile = require('./upload/upload.service.js');
//const collections = require('./collections/collections.service.js');
//const collectionCreate = require('./collection-create/collection-create.service.js');
//const collection = require('./collection/collection.service.js');
//const apikeys = require('./apikeys/apikeys.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(articles);
  app.configure(blocks);
  app.configure(categories);
  app.configure(components);
  app.configure(datastore);
  app.configure(elements);
  app.configure(generate);
  app.configure(media);
  app.configure(mediaClean);
  app.configure(plugins);
  app.configure(products);
  app.configure(projects);
  app.configure(settings);
  app.configure(setup);
  app.configure(storeProducts);
  app.configure(uploadsDelete);
  app.configure(uploadFile);
  app.configure(users);
  app.configure(whoobeBuild);
  app.configure(workspace);
  //app.configure(uploadfile);
  //app.configure(collections);
  //app.configure(collectionCreate);
  //app.configure(collection);
  //app.configure(apikeys);
  app.configure(blockElements);
};
