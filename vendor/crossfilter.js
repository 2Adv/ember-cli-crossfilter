(function() {
  /* globals define, chartist */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('crossfilter', { 'default': crossfilter });
})();