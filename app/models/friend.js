import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  thumbnail: attr('string'),
  width: attr('number'),
  height: attr('number'),

  person: belongsTo(),
  logs: hasMany()
});
