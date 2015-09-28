(function () {
	if (typeof Asteroids === "undefined") { 
		Asteroids = {}; 
	}

	var Util = Asteroids.Util = function(){ 
	}; 

	// Util.prototype.inherits = function(ChildClass, ParentClass) { 
	// 	var Surrogate = function() {}; 
	// 	Surrogate.prototype = ParentClass.prototype;
	// 	ChildClass.prototype = new Surrogate(); 
	// };


	Util.prototype.randomVec = function(length) { 
		return [length*Math.random()*(Math.random() < 0.5 ? -1 : 1), length*Math.random()*(Math.random() < 0.5 ? -1 : 1)];
	};

	Util.prototype.distance = function(pos1, pos2) {
	var x1 = pos1[0];
	var y1 = pos1[1];
	var x2 = pos2[0];
	var y2 = pos2[1];
	var xDist = Math.pow((x1 - x2),2);
	var yDist = Math.pow((y1 - y2),2);
	return Math.sqrt(xDist + yDist);
};

	Array.prototype.remove = function(from, to) {
  		var rest = this.slice((to || from) + 1 || this.length);
  		this.length = from < 0 ? this.length + from : from;
  		return this.push.apply(this, rest);
};

})();
// why is this turning red if i uncomment 25/26? 
