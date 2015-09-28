(function () {
	if (typeof MovingObject === "undefined") { 
		MovingObject = {}; 
	}
	var DIM_X = 578; 
	var DIM_Y = 200;
	var RADIUS = 15;
	var COLOR = 'black';

	var Ship = MovingObject.Ship = function(pos){ 
		MovingObject.Ship.prototype = Object.create(Asteroids.MovingObject.prototype);
	Asteroids.MovingObject.call(this, {"position": pos, "velocity": [0,0], "color": COLOR, "radius": RADIUS});
	this.bullets = [];
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

	MovingObject.Ship.prototype.relocate = function() { 
	var pos = [ Math.floor(Math.random()*DIM_X) , Math.floor(Math.random()*DIM_Y)];
	this.position = pos;
	this.velocity = [0,0];
	 };

	MovingObject.Ship.prototype.power = function(impulse){ 
	this.velocity[0] = this.velocity[0] + impulse[0];
	this.velocity[1] = this.velocity[1] + impulse[1];
};	
	
	MovingObject.Ship.prototype.bindKeyHandlers = function() { 
		that = this;
		pos = that.position;
		vel = that.velocity;
		key('up', function(){ that.power([0,-5]); });
		key('down', function(){ that.power([0,5]); });
		key('left', function(){ that.power([-5,0]); });
		key('right', function(){ that.power([5,0]); });	
		key('space', function(){ that.bullets.push(new MovingObject.Bullet(pos, vel));});
	};





})();