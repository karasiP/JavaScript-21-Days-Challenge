(() => {
  // เริ่มเขียนโค้ด
const canvas = document.getElementById('painting');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

let previousPoint = {x: 0, y: 0}

function getDistance(previousPoint, currPoint){
  return Math.sqrt((previousPoint.x - currPoint.x) ** 2 + (previousPoint.y - currPoint.y));
}

function  onMouseMove({pageX, pageY}){
  const currPoint = {x: pageX, y: pageY};
  context.beginPath();
  context.lineCap = 'round';
  context.lineJoin = 'round';
  
  const dist = getDistance(previousPoint, currPoint);
  const opa = Math.min(0.5, 1 / dist);
  context.lineWidth = Math.random() / dist * 40;
  context.strokeStyle = `rgba(200, 11, 109, ${opa})`;

  context.moveTo(previousPoint.x, previousPoint.y);
  context.lineTo(previousPoint.x, previousPoint.y);

  context.stroke();
  context.closePath();

  previousPoint = currPoint;
}

function onMouseEnter({pageX, pageY}){
  previousPoint.x = pageX;
  previousPoint.y = pageY;
}

function run(){
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseenter', onMouseEnter);
}
run();

})();
