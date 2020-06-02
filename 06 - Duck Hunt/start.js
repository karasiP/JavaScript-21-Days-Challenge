(() => {
  // เริ่มเขียนโค้ด
  function randomDucks(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  function ceateDucks(){
    return [...Array(5)].map(() => {
      return {
        x: randomDucks(0, window.innerWidth),
        y: window.innerHeight,
        speedX: randomDucks(-50, 50),
        speedY: randomDucks(5, 10)
      }
    });
    console.log(ducks);
  }
  function setUpDucks (duck){
    const duckE = document.createElement('div');
    duckE.className = 'duck';
    duckE.style.left = `${duck.x}px`;
    duckE.style.top = `${duck.y}px`;
    duckE.style.backgroundImage = `url(./left-1.png)`;
    document.body.appendChild(duckE);

    return {duck, duckE};
    
  }
  function getDuckImg(duck, duckE){
    const dire = duck.speedX > 0 ? 'right' : 'left';
    return duckE.style.backgroundImage.indexOf('1') !== -1 ? 
    `url(./$(dire)-2.png)` :
    `url(./$(dire)-1.png)`


  }

  function moveDucks(duckE, duck){
    const {left, top} = duckE.getBoundingClientRect();
    const outOfdex = duck.x < 0 || duck.x > window.innerWidth;
    const outOfdexY = duck.y < 0 || duck.y > window.innerHeight;

    if(outOfdex){
      duck.speedX += -1;
    }
    if(outOfdexY){
      duck.speedY += -1;
    }

    duck.x = left + duck.speedX;
    duck.y = top + duck.speedY;
    duckE.style.left = `${duck.x}px`;
    duckE.style.top = `${duck.y}px`;

    duckE.style.backgroundImage = getDuckImg(duck, duckE);
  }
  function shooting(even){
    const duckE = even.target;
    duckE.style.transition = 'top 2s';
    duckE.style.top = `${window.innerHeight}px`;

    clearInterval(duckE.interval);
    setTimeout(() => {
      document.body.removeChild(duckE);
      const d = document.querySelector('.duck');

      if(!d){
        const win = document.querySelector('.winning');
        win.style.opacity = 1;
      }
    }, 2000);
  }

  function run(){
    const ducks = ceateDucks();
    const duckE = ducks.map(setUpDucks);

    duckE.forEach(({duck, duckE}) => {
      duckE.interval = setInterval(() => moveDucks(duckE, duck), 100);
      duckE.addEventListener('click', shooting);
    });
  }
  run();
})();
