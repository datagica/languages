'use strict';

var _datagicaLanguages = require('../../lib/datagica-languages');

var util = require('util');
var chai = require('chai');
chai.use(require('chai-fuzzy'));
var expect = chai.expect;

// local functions
function pretty(obj) {
  return util.inspect(obj, false, 20, true);
}

describe('@datagica/languages', function () {

  var languages_stats = {
    all_languages: _datagicaLanguages.all_languages.length,
    active_languages: _datagicaLanguages.active_languages.length
  };
  // popular_languages: popular_languages.length
  console.log(pretty(languages_stats));
});