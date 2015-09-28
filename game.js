(function () {
	if (typeof Asteroids === "undefined") { 
		Asteroids = {}; 
	}
	var DIM_X = 578; 
		var DIM_Y = 200; 
		var NUM_ASTEROIDS = 20;
	

	var Game = Asteroids.Game = function(){ 
		this.asteroids = [];
		var pos = [ Math.floor(Math.random()*DIM_X) , Math.floor(Math.random()*DIM_Y)];
		this.ship = new MovingObject.Ship(pos);
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
	// this.asteroids.forEach(function(asteroid) {
	this.allObjects().forEach(function(asteroid) { 
		asteroid.draw(ctx);
	});
	this.ship.bullets.forEach(function(bullet) { 
		bullet.draw(ctx);
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
	this.allObjects().forEach(function(asteroid) { 
		asteroid.move();
		});
	this.ship.bullets.forEach(function(bullet) {
		bullet.move();
	});
	};

	Game.prototype.allObjects = function() {
		allObjs = this.asteroids.concat(this.ship);
		return allObjs;
	};

	Game.prototype.checkCollisions = function() { 
		// var allObjs = Game.prototype.allObjects()
		for (var i = 0; i < this.allObjects().length-1; i++){
			for (var j = i + 1; j < this.allObjects().length; j++){
				if ((this.allObjects()[i].isCollidedWith(this.allObjects()[j])) && (this.allObjects()[i] === this.ship)){
					this.ship.relocate();
				} else if ((this.allObjects()[i].isCollidedWith(this.allObjects()[j])) && (this.allObjects()[j] === this.ship)){
					this.ship.relocate();
			}
		}
	}
};
	Game.prototype.checkBullets = function() { 
		var bullets = this.ship.bullets;
		var asteroids = this.allObjects();
		for (var i = 0; i < bullets.length; i ++){
			for (var j = 0; j < asteroids.length; j ++){
				if (bullets[i].isCollidedWith(asteroids[j])){
					asteroids.remove(j);
				}
			}
		}};

	Game.prototype.step = function() { 
		this.moveObjects();
		this.checkCollisions();
	};




//what's happening at edge of window? Why does it streak? 
//How can i make window bigger? 

})();


