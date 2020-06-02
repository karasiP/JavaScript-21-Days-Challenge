(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  // function simulate(text, timeout){
  //   setTimeout(() => console.log(text), timeout);
  // }

  // simulate('A', 1000);
  // simulate('B', 500);
  // simulate('C', 100);

  // 2. Callback
  // function simulateAPI(text, timeout, callack){
  //   setTimeout(() => {
  //     console.log(text)
  //     if(callback){
  //       callack();
  //     }
  //   },timeout);
  // }

  // simulateAPI('A', 1000, () => {
  //   simulateAPI('B', 500, () => {
  //     simulateAPI('C', 100);

  //   });
  // });

  // 3. Promise
  // function simulateAPI(text, timeout){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if(text === 'B') return reject('B get rejected');
  //       console.log(text);
  //       resolve();
  //     }, timeout);
  //   })
  // }

  // simulateAPI('A', 1000)
  //   .then(() => {
  //     return simulateAPI('B', 500);
  //   })
  //   .then(() => {
  //     return simulateAPI('C', 100);
  //   })
  //   .catch((error) => {
  //     console.log('error');
  //   })

  // 4. Async/Await
  function simulateAsyncAPI(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (text == 'B') reject('B got rejected');

        console.log(text);
        resolve();
      }, timeout);
    });
  }

  async function run(){
    try {
      await simulateAsyncAPI('A', 1000);
      await simulateAsyncAPI('B', 500);
    } catch (error) {
      consol.error(error);
    }
  }
  run();
})();
