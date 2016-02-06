const util = require('util');
const chai = require('chai');
chai.use(require('chai-fuzzy'));
const expect = chai.expect;

const datagicaLanguages = require("../lib/datagica-languages");

// local functions
function pretty(obj) {
  return util.inspect(obj, false, 20, true);
}

describe('@datagica/languages', () => {

  const languages_stats = {
    all_languages: datagicaLanguages.all_languages.length,
    active_languages: datagicaLanguages.active_languages.length,
    // popular_languages: popular_languages.length
  };
  console.log(pretty(languages_stats));

});
