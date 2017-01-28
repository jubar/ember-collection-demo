import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  avatar: attr('string'),
  email: attr('string'),
  jobTitle: attr('string'),
  online: attr('boolean')
});
