(function () {
	if (typeof Asteroids === "undefined") { 
		Asteroids = {}; 
	}
	var DIM_X = 578; 
		var DIM_Y = 200; 
		var NUM_ASTEROIDS = 12;
	

	var Game = Asteroids.Game = function(){ 
		this.asteroids = [];
	}; 

	Game.prototype.addAsteroids = function() { 
	while (this.asteroids.length < NUM_ASTEROIDS){
		var pos = [ Math.floor(Math.random()*DIM_X) , Math.floor(Math.random()*DIM_Y)];
		this.asteroids.push(new MovingObject.Asteroid(pos)); 
	} // define in scope to that the var is reassigned!! 
};
	Game.prototype.draw = function(ctx) {
	ctx = ctx.getContext('2d'); 
	ctx.clearRect(0,0,490,720); 
	this.asteroids.forEach(function(asteroid) { 
		asteroid.draw(ctx);
	});
};	

	// Game.prototype.wrap = function(pos) { 
	// 	if (pos[0] < 0){ 
	// 		pos[0] = 720 - pos[0];
	// 	} else if (pos[1] < 0){
	// 			pos[1] = 490 - pos[1];
	// 	} else if (pos[0] > 720){
	// 		pos[0] = pos[0] - 720;

	// 	} else if (pos[1] > 490){
	// 		pos[1] = pos[1] - 490;
	// 	}
	// };

	Game.prototype.moveObjects = function() { 
	this.asteroids.forEach(function(asteroid) { 
		asteroid.move();
		});
	};

	Game.prototype.checkCollisions = function() { 
		for (var i = 0; i < this.asteroids.length-1; i++){
			for (var j = i + 1; j < this.asteroids.length; j++){
				if (this.asteroids[i].isCollidedWith(this.asteroids[j])){
					console.log("COLLISION");
					this.asteroids.remove(i,j); 
				}

			}
		}
	};

	Game.prototype.step = function() { 
		this.moveObjects();
		this.checkCollisions();
	}




//w hat's happening at edge of window? Why does it streak? 
//How can i make window bigger? 

})();


