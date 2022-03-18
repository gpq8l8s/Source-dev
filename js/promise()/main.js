//Example 1
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
    //reject(new Error("err.."));
  }, 1000);
});

console.log('start');
pr.then(result => {
  console.log(result);
})
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('done');
  });


//Example 2
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('number 1');
    }, 1000);
  });
};

const f2 = message => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('number 2');
      //if it's fail(error)
      //rej('xxx');
    }, 3000);
  });
};

const f3 = message => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('number 3');
    }, 2000);
  });
};

console.log('start');
//it is called CALLBACK HELL
f1(function () {
  f2(function () {
    f3(function () {
      console.log('done');
    });
  });
});


// to avoid using callback hell, we have PROMISE
console.log('start');
//promise chaning : connect plusier promise
f1()
  .then(res => f2(res))
  .then(res => f3(res))
  .then(res => console.log(res))
  //catch error
  .catch(console.log)
  //finally execute the code all the time at the end
  .finally(() => {
    console.log('doooone');
  });

//to execute f1 to f3, it takes 6seconds
//To reduce the time of executing the codes, We can use PROMISE.ALL()
//takes 3seconds now 👍
Promise.all([f1(), f2(), f3()]).then(res => {
  //if there's any error in the function, we will have 0 data.
  //So we can use promise.all to not show entire page when even one function doesn't work
  //To show all or nothing
  console.log(res);
});

//Promise.race
//promise.all gives us all the datas at one time, but promise.race directly gives us first data which's ready.
//not all the datas
Promise.race([f1(), f2(), f3()]).then(res => {
  console.log(res);
});
