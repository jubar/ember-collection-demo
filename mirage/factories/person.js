import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.findName();
  },

  avatar() {
    return faker.image.avatar();
  },

  email() {
    return faker.internet.email();
  },

  jobTitle() {
    return faker.name.jobTitle();
  },

  online() {
    return faker.random.boolean();
  }
});
