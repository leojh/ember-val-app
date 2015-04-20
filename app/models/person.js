import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin, {
  validations: {
    age: {
      numericality: {
        onlyInteger: true,
        allowBlank: true,
        messages: {
          onlyInteger: 'Age must be a whole number'
        }
      }
    }
  },

  name: DS.attr('string')
});
