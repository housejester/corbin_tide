function start_tide() {
  createPaddle();
}
/*
 - create paddle
 - move paddle
 - create ball
 - move ball
 - bounce ball off screen edge
 - bounce ball off paddle
 - count score
 - display score
 - detect game over
 - game over screen 
*/
var createPaddle = function(){
	var paddle = document.createElement('div');
	paddle.id = 'paddle';
	document.body.appendChild(paddle);
}