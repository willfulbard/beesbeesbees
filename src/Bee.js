var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.constructor = Grub;

