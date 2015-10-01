'use strict';

const fs = require('fs-extra');
const path = require('path');
const resolve = require('./resolve');

const root = path.resolve('build/');

module.exports = function(url) {
  let file = path.join(root, resolve(url));
  let content = '';

  try {
    content = fs.readFileSync(file, {'encoding': 'utf8'});
  } catch (e) {
    content = e;
  }

  return content;
};
