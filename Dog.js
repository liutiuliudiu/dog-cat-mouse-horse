function Dog() {
	this.stomach = [];	
}

Dog.prototype.eat = function(cat) {
	this.stomach.put(cat);
}
