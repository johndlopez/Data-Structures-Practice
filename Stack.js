const extends = (obj1, obj2) => {
	for(var key in obj2) {
		obj1[key] = obj2[key];
	}
	return obj1;
};

var Stack = function() {
	var obj = {};
	obj.storage = [];
	obj.index = 0;
	obj.length = obj.index + 1;
	extends(obj, Stack.methods);
	return obj;
}


Stack.methods = function() {
	push: function(value) {
		this.storage[this.index] = value;
		this.index++;
	},  //add to top
	pop:  function(value) {
		this.storage.slice(0, this.length);
		this.index--;
	}, //remove the top
	peek: function() { return this.storage[this.index]; }//returns value of whatever is on top
	len:  function() {
		return this.length;
		// return this.storage.length;
	}//returns length of stack
}
