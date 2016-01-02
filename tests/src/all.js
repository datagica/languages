const util = require('util');
const chai = require('chai');
chai.use(require('chai-fuzzy'));
const expect = chai.expect;

import { all_languages, active_languages } from '../../lib/datagica-languages';

// local functions
function pretty(obj) {
  return util.inspect(obj, false, 20, true);
}

describe('@datagica/languages', () => {

  const languages_stats = {
    all_languages: all_languages.length,
    active_languages: active_languages.length,
    // popular_languages: popular_languages.length
  };
  console.log(pretty(languages_stats));

});
