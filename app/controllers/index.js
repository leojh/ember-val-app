import Ember from 'ember';

export default Ember.Controller.extend( {
  actions: {
    save: function() {
      var model = this.get('model');

      model.validate().then(() =>
        model.save()
          .catch(result => {
            console.log(result);
          })
        ).catch(function() {
          console.log('Client Validations failed');
        });
      }
    }
  }
);
