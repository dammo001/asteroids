(function () {
	if (typeof MovingObject === "undefined") { 
		MovingObject = {}; 
	}
	var COLOR = 'green'; 
	var RADIUS = '3'; 


	var Asteroid = MovingObject.Asteroid = function(pos){
	MovingObject.Asteroid.prototype = Object.create(Asteroids.MovingObject.prototype);
	Asteroids.MovingObject.call(this, {"position": pos, "velocity": Asteroids.Util.prototype.randomVec(RADIUS), "color": COLOR, "radius": RADIUS});
	
	}; 

	MovingObject.Asteroid.prototype.move = function(){ 
		Asteroids.MovingObject.prototype.move.call(this);
	};

	MovingObject.Asteroid.prototype.draw = function(ctx){
		Asteroids.MovingObject.prototype.draw.call(this, ctx);
	};

	MovingObject.Asteroid.prototype.isCollidedWith = function(otherObject){
		Asteroids.MovingObject.prototype.isCollidedWith.call(this, otherObject); 
	};

})();