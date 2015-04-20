import Ember from 'ember';

export default Ember.Controller.extend( {
  actions: {
    save: function() {
      this.get('model')
        .save()
        .catch((result) => {
          console.log(result);
        });
    }
  }
});
