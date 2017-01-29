import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['contact-panel'],
  columns: [100],
  showToast: false,
  scrollLeft: 0,
  scrollTop: 0,
  firstItemVisible: 1,
  lastItemVisible: 1,
  itemHeight: 100,

  totalOnline: computed('source', function() {
    return this.get('source').filterBy('online').length;
  }),

  numberOfColumns: computed('columns.[]', function() {
    return this.get('columns').length;
  }),

  taskHideToast: task(function*() {
    yield timeout(1500);

    Ember.$('.list-result--display-information').fadeTo(250, 0, () => {
      this.set('showToast', false);
    });

    yield timeout(250);
  }).restartable(),

  taskShowToast: task(function*() {
    this.set('showToast', true);
    Ember.$('.list-result--display-information').fadeTo(250, 1);

    yield timeout(250);
  }).drop(),

  actions: {
    scrollChange(scrollLeft, scrollTop) {
      let columns = this.get('numberOfColumns');
      let height = this.get('itemHeight');
      let first = Math.floor(scrollTop / height) * columns + 1;
      let availableHeight = this.$('.list-result').outerHeight() * columns;
      let last = Math.floor(availableHeight / height);

      this.setProperties({
        scrollLeft,
        scrollTop,
        firstItemVisible: first,
        lastItemVisible: first + last
      });

      this.get('taskShowToast').perform();
      this.get('taskHideToast').perform();
    }
  }
});
