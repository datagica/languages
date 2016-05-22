const util = require('util');
const chai = require('chai');
chai.use(require('chai-fuzzy'));
const expect = chai.expect;

const langs = require("../lib/datagica-languages");

// local functions
function pretty(obj) {
  return util.inspect(obj, false, 20, true);
}

describe('@datagica/languages', () => {

  it('should have the correct number of languages', () => {
    const stats = {
      all: langs.all.length,
      withIETF: langs.withIETF.length,
      ietf: Object.keys(langs.byIETF).length
    };
    console.log(pretty(stats));

    expect(stats).to.be.like({ all: 550, withIETF: 58, ietf: 58 })
  })

});
