// tests/unit/chartist-module-test.js
import { module, test } from 'qunit';
import chartist from 'chartist';

module('chartist as an ES6 module');

test('it works', function(assert) {
  assert.ok(chartist);
});