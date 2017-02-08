export default function(server) {

  let person = server.create('person');

  let friend = server.create('friend', {
    person
  });

  let logs = server.createList('log', 700, {
    friend
  });

  server.createList('friend', 300, {
    person
  });

  server.createList('person', 1000);
}
