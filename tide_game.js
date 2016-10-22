function onMouseMove (e) {
    var x = e.clientX;
    findPaddle().style.left = (x-75) + 'px';
};

function findPaddle(){
	return document.getElementById('paddle');
}

function gameLoop(){
	moveBall();
	// collision detection (walls & paddle)
	// if game over, cancel the gameLoopInterval with clearInterval(gameLoopInterval)
}
var ballSpeed = 10;
function findBall(){
	return document.getElementById('ball');
}
function moveBall(){
	var ball = findBall();
	var left = parseInt(ball.style.left) || 0;
	var top = parseInt(ball.style.top) || 0;
	ball.style.left = left + ballSpeed + 'px';
	ball.style.top = top + ballSpeed + 'px';
}
var gameLoopInterval = setInterval(gameLoop, 1000/60)

/*
 * create paddle
 * move paddle
 * create ball
 * move ball
 - bounce ball off screen edge
 - bounce ball off paddle
 - count score
 - display score
 - detect game over
 - game over screen 
*/
