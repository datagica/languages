'use strict';

// TODO put this in a separate project on github
const all = require('../data/all-languages.json');
const withIETF = all.filter(lang => (typeof lang.ietf === 'string'));
const byIETF = {};
module.exports = {
  all: all,
  withIETF: withIETF,
  byIETF: byIETF
}

withIETF.forEach(language => {
  byIETF[language.ietf] = language;
})
