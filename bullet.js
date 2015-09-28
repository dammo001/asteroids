(function () {
	if (typeof MovingObject === "undefined") { 
		MovingObject = {}; 
	}
	var COLOR = 'red'; 
	var RADIUS = 1; 


	var Bullet = MovingObject.Bullet = function(pos, vel){
	MovingObject.Bullet.prototype = Object.create(Asteroids.MovingObject.prototype);
	Asteroids.MovingObject.call(this, {"position": pos, "velocity": vel, "color": COLOR, "radius": RADIUS});

	}; 

	MovingObject.Bullet.prototype.move = function(){ 
	this.position[0] = this.position[0] + vel[0];
	this.position[1] = this.position[1] + vel[1];
	};

	MovingObject.Bullet.prototype.draw = function(ctx){
		Asteroids.MovingObject.prototype.draw.call(this, ctx);
	};

	MovingObject.Bullet.prototype.isCollidedWith = function(otherObject){
	if (otherObject instanceof MovingObject.Ship){
		return false;
	} else if (Asteroids.Util.prototype.distance(this.position, otherObject.position) > (this.radius + otherObject.radius)){
		return false;
	} else {
		return true;
	}
};



})();