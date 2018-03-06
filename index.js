/* eslint-env node */
'use strict';

module.exports = {
  name: 'crossfilter',

  isDevelopingAddon() {
    return false;
  },

  included: function included(app) {
    this._super.included(app);
    debugger
    app.import(app.bowerDirectory + '/crossfilter2/crossfilter.min.js');
    app.import('vendor/crossfilter.js', {
      exports: {
        Crossfilter: ['default']
      }
    });
  }
};
