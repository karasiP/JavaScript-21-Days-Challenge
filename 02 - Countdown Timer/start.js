(() => {
  const SECOMD = 1000;
  const MINUNTE = SECOMD * 60;
  const HOUR = MINUNTE * 60;
  const DAY = HOUR * 24;

  function setElement(id, text){
    const element = document.getElementById(id);
    element.innerHTML = text;
  }

  function countDown(){
    const now = new Date().getTime();
    const newYear = new Date('December 31, 2020 23:59:59').getTime();
    const unixTimeLeft = newYear - now;

    setElement('days', Math.floor(unixTimeLeft / DAY));
    setElement('hours', Math.floor(unixTimeLeft % DAY / HOUR));
    setElement('minutes', Math.floor(unixTimeLeft % HOUR / MINUNTE));
    setElement('seconds', Math.floor(unixTimeLeft % MINUNTE / SECOMD));

    // const dayE = document.getElementById('days');
    // dayE.innerText = Math.floor(unixTimeLeft / DAY);
    // const hourE = document.getElementById('hours');
    // hourE.innerText = Math.floor(unixTimeLeft % DAY / HOUR);
    // const minE = document.getElementById('minutes');
    // minE.innerText = Math.floor(unixTimeLeft % HOUR / MINUNTE);
    // const secE = document.getElementById('seconds');
    // secE.innerText = Math.floor(unixTimeLeft % MINUNTE / SECOMD);
  }
 
  function run(){
    countDown();
    setInterval(countDown, SECOMD);
  }
  run();
})();
