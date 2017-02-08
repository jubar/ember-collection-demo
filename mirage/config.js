export default function() {
  this.get('people');
  this.get('friends/:id');
  this.get('logs/:id');
}
