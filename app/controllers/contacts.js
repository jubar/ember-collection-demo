import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [50, 50],
  
  actions: {
    showFriends(id) {
      console.log('Contact: ', id);
    }
  }
});
