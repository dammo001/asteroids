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
	// var pos = [ Math.floor(Math.random()*DIM_X) , Math.floor(Math.random()*DIM_Y)];
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



//w hat's happening at edge of window? Why does it streak? 
//How can i make window bigger? 

})();


//why does changing NUM_ASTEROIDS only change speed? Why aren't i getting more objs? 