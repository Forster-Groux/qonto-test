import { moduleForModel, test } from 'ember-qunit';

moduleForModel('transaction', 'Unit | Model | transaction', {
  needs: []
});

test('should format date to DD-MM-YYYY', function(assert) {  // this.subject aliases the createRecord method on the model
  const transaction = this.subject({ created_at: new Date("October 17, 1988 11:13:00") });

  assert.equal(transaction.get('formatedDate'), '17-10-1988');
});
