(() => {
  // เริ่มเขียนโค้ด
  let index = 0;

  function slideImage(newImg){
    newImg.scrollIntoView({ behavior: 'smooth' });
  }

  function displayImg(imageElems,newIndex){
    const lastIndex = imageElems.length - 1;

    if (newIndex < 0) {
      index = lastIndex;
    } else if (newIndex > lastIndex) {
      index = 0;
    } else {
      index = newIndex;
    }

    slideImage(imageElems[index]);
  }

  function run(){
    const imgElems = document.querySelectorAll('img');
    const previewElems = document.querySelector('.previous');
    const nextElems = document.querySelector('.next');

    previewElems.addEventListener('click', () => displayImg(imgElems, index - 1));
    nextElems.addEventListener('click', () => displayImg(imgElems, index + 1));
  }
  run();
})();
