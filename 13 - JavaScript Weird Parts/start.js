(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN
  // if(Nan * 1 == Nan){
  //   console.log("Equal");
  // }

  const resual = 1 / 'hello';
  if(Number.isNaN(resual)){
    console.log('Equal to Nan');
  }
  // 2. Type Coercion
  if(1 < 2 < 3 ){
    console.log("Inside");
  }
// เพราะว่าตัว Coercion จะแปลงจาก 3 > 2 = true > 1 
  if(3 > 2 > 1){
    console.log("Inside");
  }

  console.log(2 - '1'); // 1
  console.log(2 + '1'); // '21'
  console.log(2 + Number.parseInt('1')); // 3

  // 3. Interpreter & Compiler
  function getName(){
    return
    {
      name: 'Natthakarn'
    };
  }
  console.log(getName()); // undefined

  function getNane1(){
    return {
      name: 'Natthkarn'
    };
  }
  console.log(getNane1()); // {name:'Natthakarn'}

  // 4. Checking Object Type
  const person = {};
  if(typeof person == 'object'){
    console.log('Yes, object'); // Yes,object
  }

  const person1 = null;
  if(typeof person1 == 'object'){ //Null ต้องไม่เท่ากับ object
    console.log('Yes, object'); // Yes, object
  }

  const person2 = null;
  if(typeof person2 == 'object' && person2 != null){
    console.log('Yes,object');
  }

})();
