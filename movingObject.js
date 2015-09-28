// how do I access this once I nest it multiple times? Is this the correct way to name space? 


// var window = function(){ 
(function () {
	if (typeof Asteroids === "undefined") { 
		Asteroids = {}; 
	}

	var MovingObject = Asteroids.MovingObject = function (options){ 
			this.position = options.position || [0,0]; 
			this.velocity = options.velocity || [30,30];  
			this.radius = options.radius || 70;
			this.color = options.color || 'grey';
		};

	MovingObject.prototype.draw = function(ctx) { 
			var x = this.position[0];
			var y = this.position[1];
			ctx.beginPath(); 
			ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
			ctx.fillStyle = this.color;
			ctx.fill();
		 };

	MovingObject.prototype.move = function(){
		// get help refactoring this !! setting x,y locks value... get explanation in terms of scope 

		// var x = this.position[0];
		// var y = this.position[1]; 
		this.position[0] = this.position[0] + this.velocity[0];
		if (this.position[0] < 0){
			this.position[0] = 720 - this.position[0];
		} else if (this.position[0] > 720){
			this.position[0] = this.position[0] - 720;
		}
		this.position[1] = this.position[1] + this.velocity[1]; 
		if (this.position[1] < 0){
			this.position[1] = 490 - this.position[1]; 
		} else if (this.position[1] > 490){
			this.position[1] = this.position[1] - 490;
		}
	};

	MovingObject.prototype.isCollidedWith = function(otherObject){
	if (Asteroids.Util.prototype.distance(this.position, otherObject.position) > (this.radius + otherObject.radius)){
		return false;
	}else {
		return true;
	}
};



	



})();











	// var Asteroids = {

	// 	var MovingObject = function (options){ 
	// 		this.position = options.position || [0,0]; 
	// 		this.velocity = options.velocity || [30,30];  
	// 		this.radius = options.radius || 70;
	// 		this.color = options.color || 'grey';
	// 		var x = this.position[0];
	// 		var y = this.position[1];

	// 		this.draw = function(ctx){
	// 				ctx = ctx.getContext('2d');
	// 				ctx.beginPath(); 
	// 				ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
	// 				ctx.fillStyle = this.color;
	// 				ctx.fill();
	// 			 };
	// 			};

	// 		this.move = function(){ 
	// 			this.position[0] = this.position[0] + this.velocity[0];
	// 			this.position[1] = this.position[1] + this.velocity[1]; 
	// 		};
		
	// };
// };


