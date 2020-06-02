(() => {
  // เริ่มเขียนโค้ด
function onScroll(){
  const sectionElems = Array.from(document.querySelectorAll('section'));
  sectionElems.forEach((sectionElems) =>{
    const imgE = sectionElems.querySelector('img');
    const textE = sectionElems.querySelector('.text');

    const scrollPosition = window.pageYOffset;
    const revealPosition = imgE.offsetTop / 10;

    if(scrollPosition >= revealPosition){
      textE.classList.add('reveal');
    }
  });
}  

function run(){
  document.addEventListener('scroll', onScroll);
}
run();
})();
