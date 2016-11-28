import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select_transaction: function(transaction) {
      this.set('selectedTransaction', transaction);
    }
  }
})
