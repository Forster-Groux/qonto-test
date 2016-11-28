import { test } from 'qunit';
import moduleForAcceptance from 'qonto-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transactions');

test('visiting /transactions', function(assert) {
  visit('/transactions');

  andThen(function() {
    assert.equal(currentURL(), '/transactions');
  });
});
