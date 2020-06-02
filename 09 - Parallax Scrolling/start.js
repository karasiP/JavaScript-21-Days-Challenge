(() => {
  // เริ่มเขียนโค้ด
  function onScroll(){
    const moonE = document.querySelector('.moon');
    const wishE = document.querySelector('.wish');

    moonE.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`;
    wishE.style.transform = `translateY(${window.scrollY * -1.5}%)`;
  }

  function run(){
    document.addEventListener('scroll', onScroll);
  }
  run();
})();
