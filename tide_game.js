var ballXSpeed = 5;
var ballYSpeed = 5;
function onMouseMove (e) {
    var x = e.clientX;
    findPaddle().style.left = (x-75) + 'px';
};

function findPaddle(){
	return document.getElementById('paddle');
}

function gameLoop(){
	moveBall();
	edgeBounce();
	paddleBounce();
	if(isGameOver()){
		clearInterval(gameLoopInterval)
		document.getElementById('GameOver').style.display = "block"
	}
	// collision detection (walls & paddle)
	// if game over, cancel the gameLoopInterval with clearInterval(gameLoopInterval)
}
function edgeBounce(){
	var ball = findBall();
		//right edge
	if(parseInt(ball.style.left) + 20 >= document.body.clientWidth){
		ball.style.left = (document.body.clientWidth - 21) + 'px'
		ballXSpeed = -ballXSpeed
	}
	//top
	else if(parseInt(ball.style.top) <= 0){
		ball.style.top = 1 + 'px'
		ballYSpeed = -ballYSpeed
	}
	//left edge
	else if(parseInt(ball.style.left) <= 0){
		ball.style.left = 1 + 'px'
		ballXSpeed = -ballXSpeed
	}
}
function paddleBounce(){
	var ball = findBall();
	var paddle = findPaddle();
	var paddleRect = paddle.getBoundingClientRect()
	var ballRect = ball.getBoundingClientRect()
	if(
		ballRect.bottom >= paddleRect.top 
		&& (
			(ballRect.right >= paddleRect.left && ballRect.right <= paddleRect.right) 
			|| (ballRect.left <= paddleRect.right && ballRect.left >= paddleRect.left)
		)){
		ballYSpeed = -ballYSpeed
	}
}
function findBall(){
	return document.getElementById('ball');
}
function moveBall(){
	var ball = findBall();
	var left = parseInt(ball.style.left) || 0;
	var top = parseInt(ball.style.top) || 0;
	ball.style.left = left + ballXSpeed + 'px';
	ball.style.top = top + ballYSpeed + 'px';
}
function isGameOver(){
	var ball = findBall();
	var ballRect = ball.getBoundingClientRect();
	if(ballRect.bottom >= document.body.clientHeight){
		return true
	}
	return false
}
var gameLoopInterval = setInterval(gameLoop, 1000/60)
/*
 * create paddle
 * move paddle
 * create ball
 * move ball
 * bounce ball off screen edge
 * bounce ball off paddle
 - count score
 - display score
 * detect game over
 - game over screen 
*/
