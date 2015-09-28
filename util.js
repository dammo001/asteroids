(function () {
	if (typeof Asteroids === "undefined") { 
		Asteroids = {}; 
	}

	var Util = Asteroids.Util = function(){ 
	}; 

	Util.prototype.inherits = function(ChildClass, ParentClass) { 
		var Surrogate = function() {}; 
		Surrogate.prototype = ParentClass.prototype;
		ChildClass.prototype = new Surrogate(); 
	};


	Util.prototype.randomVec = function(length) { 
		return [length*Math.random()*(Math.random() < 0.5 ? -1 : 1), length*Math.random()*(Math.random() < 0.5 ? -1 : 1)];
	};
})();