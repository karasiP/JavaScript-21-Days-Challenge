(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName(){
  //   console.log(this);
  // }
  // printName();

  // 2. How to know what is "this"?
  // function printName(){
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  //   console.log('My name is', this.name);
  // }

  //// 2.1 Invoker object
  // const natthakarn = {name : 'Natthakrn', printName};
  // const prai = {name : 'Prai', printName};

  // natthakarn.printName();
  // prai.printName();

  // //// 2.2 Global object (window, global)
  // name = 'Global';
  // printName();

  //// 2.3 Constructor function
  // function Person(name){
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const natthakarn = new Person('Natthakarn');
  // natthakarn.printName();

  // 3. call(), apply(), and bind()
  function printName(national,city){
    console.log(this);
   // console.log(`My name is ${this.name}, I'm ${national} and am living in ${city}`);
   // console.log('My name is', this.name, 'I am', );
   console.log(
    `My name is ${this.name}, I'm ${national} and am living in ${city}`
  );
  }

  function Person(name, national, city){
    this.name = name;
    this.national = national;
    this.city = city;

    printName(this.national,this.city);
    printName.call(this, this.national, this.city);
    printName.apply(this, [this.national, this.city]);
    
    const prt = printName.bind(this);
    prt(this.national, this.city);
  }

  const natt = new Person('Natthakarn', 'Thailand', 'Sisaket');

})();