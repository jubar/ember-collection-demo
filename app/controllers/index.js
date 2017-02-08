import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  friends: [],
  friendsSizes: computed('files.[]', function() {
    let sizes = [];
    this.get('friends').forEach((file) => {
      sizes.push({
        width: file.get('width'),
        height: file.get('height')
      });
    });
    return sizes;
  }),


  actions: {
    showFriends(id) {
      let person = this.get('store').peekRecord('person', id);
      person.get('friends').then((data) => {
        this.set('friends', data);
      })
    }
  }
});
