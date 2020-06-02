(() => {
  // เริ่มเขียนโค้ด
const konami = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

let index = 0;

function onKeydown(event){
  event.key == konami[index] ? index++ : index = 0;
  console.log(event.key);

  if(konami.length == index){
    startSnowing();
  }
}

function run (){
  document.addEventListener('keydown', onKeydown);
}
run();

})();
