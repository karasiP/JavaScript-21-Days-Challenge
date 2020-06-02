(() => {
  // เริ่มเขียนโค้ด
 function run() {
   const bodyElem = document.querySelector('body');
   const eyeElem = document.querySelectorAll('.eye');

   function onMove({pageX, pageY} ) {
    eyeElem.forEach((eyeElem) => {
      const {left, top} = eyeElem.getBoundingClientRect();

      const eyeCenterX = left + eyeElem.offsetWidth / 2;
      const eyeCenterY = top + eyeElem.offsetHeight / 2;
      const rad = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
      const agn = rad * 180 / Math.PI;
     // console.log(agn);
      eyeElem.style.transform = `rotate(${agn}deg)`;
    });
   }
   bodyElem.addEventListener('mousemove', onMove)
 }
 run();
})();
