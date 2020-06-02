(() => {
  // เริ่มเขียนโค้ด
  let draggingE;

  function onDragStar(){
    draggingE = this;
   
  }

  function ondragEnter(event){
   event.preventDefault();
   
  }

  function ondragOver(event){
   event.preventDefault();
    
  }

  function onDrop(){
    this.append(draggingE);
    draggingE = null;   
  }

  function run(){
    const taskE = Array.from(document.querySelectorAll('.task'));
    const dropzone = Array.from(document.querySelectorAll('.drop-zone'));
    
    taskE.forEach((taskE) => {
      taskE.addEventListener('dragstart', onDragStar);
    });
    
    dropzone.forEach((dropzone) => {
      dropzone.addEventListener('drop', onDrop);
      dropzone.addEventListener('dragover', ondragOver);
      dropzone.addEventListener('dragenter', ondragEnter);
    });
  }
  run();
})();
