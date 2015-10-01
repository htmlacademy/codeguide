'use strict';

const fs = require('fs-extra');
const path = require('path');

const options = require(path.resolve('config/kit'));

const root = path.resolve('build/');
const discover = options.discover.map(function(folder) {
  return path.resolve(root, folder);
});

module.exports = function(url) {
  let file;

  let found = discover.some(function(folder) {
    file = path.join(folder, url);
    return fs.existsSync(file);
  });

  if (found) {
    url = file.replace(root, '');
  }

  return url;
};
