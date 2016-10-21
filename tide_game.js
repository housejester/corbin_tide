function onMouseMove (e) {
    var x = e.clientX;
    findPaddle().style.left = (x-75) + 'px';
};

function findPaddle(){
	return document.getElementById('paddle')
}

function gameLoop(){
	console.log('in game loop')
	// update ball position
	// collision detection (walls & paddle)
	// if game over, cancel the gameLoopInterval with clearInterval(gameLoopInterval)
}
var gameLoopInterval = setInterval(gameLoop, 1000)
/*
 * create paddle
 * move paddle
 * create ball
 - move ball
 - bounce ball off screen edge
 - bounce ball off paddle
 - count score
 - display score
 - detect game over
 - game over screen 
*/
