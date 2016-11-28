import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  created_at: DS.attr(),
  counterparty_name: DS.attr(),
  debit: DS.attr(),
  credit: DS.attr(),
  amount: DS.attr(),
  currency: DS.attr(),
  operation_type: DS.attr(),
  attachements: DS.attr(),

  formatedDate: function () {
    return moment(this.get('created_at')).format('DD-MM-YYYY');
  }.property('created_at'),
});
