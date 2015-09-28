(function () {
	if (typeof MovingObject === "undefined") { 
		MovingObject = {}; 
	}

	var RADIUS = 2;
	var COLOR = 'black';

	var Ship = MovingObject.Ship = function(pos){ 
		MovingObject.Ship.prototype = Object.create(Asteroids.MovingObject.prototype);
	Asteroids.MovingObject.call(this, {"position": pos, "velocity": [0,0], "color": COLOR, "radius": RADIUS});
	}; 

	MovingObject.Ship.prototype.move = function(){ 
		Asteroids.MovingObject.prototype.move.call(this);
	};

	MovingObject.Ship.prototype.draw = function(ctx){
		Asteroids.MovingObject.prototype.draw.call(this, ctx);
	};

	MovingObject.Ship.prototype.isCollidedWith = function(otherObject){
		Asteroids.MovingObject.prototype.isCollidedWith.call(this, otherObject); 
	};





})();