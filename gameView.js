(function () {
	if (typeof Asteroids === "undefined") { 
		Asteroids = {}; 
	}

	var gameView = Asteroids.gameView = function(ctx){ 
		this.game = new Asteroids.Game();
		this.game.addAsteroids();
		this.ctx = ctx;
	};

	gameView.prototype.start = function() { 
		var game = this.game;
		var ctx = this.ctx;
		setInterval(function(){game.step(), game.draw(ctx)}.bind(game), 50);
	}; 

})();