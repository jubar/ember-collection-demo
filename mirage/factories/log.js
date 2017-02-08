import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  date() {
    return faker.date.past(1);
  },
  type() {
    return faker.random.arrayElement([
      'Message',
      'Call'
    ]);
  },
  status() {
    return faker.random.arrayElement([
      'Sent',
      'Received'
    ]);
  },
  description: faker.hacker.phrase
});
