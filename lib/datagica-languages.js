'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO put this in a separate project on github
var all_languages = exports.all_languages = require('../data/all-languages.json');

var active_languages = exports.active_languages = all_languages.filter(function (lang) {
  return typeof lang.ietf === 'string';
});