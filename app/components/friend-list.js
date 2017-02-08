import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['friends-panel'],

  friendsSizes: computed('model.[]', function() {
    let sizes = [];
    this.get('model').forEach((friend) => {
      sizes.push({
        width: friend.get('width'),
        height: friend.get('height')
      });
    });
    return sizes;
  })

});
