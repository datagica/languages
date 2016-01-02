// TODO put this in a separate project on github
export const all_languages = require('../data/all-languages.json');

export const active_languages = all_languages.filter(lang => (typeof lang.ietf === 'string'));
