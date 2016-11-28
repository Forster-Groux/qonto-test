import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr(),
  counterparty_name: DS.attr(),
  debit: DS.attr(),
  credit: DS.attr(),
  amount: DS.attr(),
  currency: DS.attr(),
  operation_type: DS.attr(),
  attachements: DS.attr(),
});
