export default function(server) {
  for (var i = 0; i <= 3; i++) {
    let person = server.create('person');
    server.createList('friend', 300, {
      personId: person.id
    });
  }

  server.createList('person', 1000);
}
