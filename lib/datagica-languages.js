'use strict';

// TODO put this in a separate project on github
const all_languages = require('../data/all-languages.json');
const active_languages = all_languages.filter(lang => (typeof lang.ietf === 'string'));

module.exports = {
  all_languages: all_languages,
  active_languages: active_languages
}
