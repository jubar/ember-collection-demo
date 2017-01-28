import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['wrap-avatar'],
  classNameBindings: ['isOnline:wrap-avatar__online']
});
