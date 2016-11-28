import Ember from 'ember';

export default Ember.Controller.extend({
  currentOrder: 'default',

  actions: {
    select_transaction: function(transaction) {
      this.set('selectedTransaction', transaction);
    },

    sort_transactions: function(order) {
      let sortedModel = this.get('model').sortBy(order);
      this.set('model', sortedModel);
      this.set('currentOrder', order);
    },
  }
});
