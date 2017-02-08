import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.hacker.adjective();
  },
  thumbnail: faker.image.avatar,
  width() {
    return 250;
  },
  height() {
    return faker.random.arrayElement([
      100,
      180,
      550
    ]);
  }
});
