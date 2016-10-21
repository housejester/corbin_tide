function onMouseMove (e) {
    var x = e.clientX;
    findPaddle().style.left = (x-75) + 'px';
};
function findPaddle(){
	return document.getElementById('paddle')
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
