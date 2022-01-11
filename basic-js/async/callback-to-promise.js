//callback Hell example
// Solution used promise function
class UserStorage{
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id ==='ellie' && password ==='dream') ||
          (id ==='coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise ((resovle, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve ({name : 'ellie', role : 'admin'});
        } else {
          reject(new Error('no found'));
        }
      }, 1000);
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your password');
userStorage.loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role}`));
  .catch(console.log);




  //that I tried..
  const loginUser1 = 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`id : ${'ellie'}, password : ${'dream'}`), 1000);
    throw new Error('no found');
  });
const loginUser2 = 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`id : ${'coder'}, password : ${'academy'}`), 1000);
    throw new Error('no found');
  });
  loginUser1()
  loginUser2()
    .then(loginUser1 => {
      console.log(loginUser1);
    })
    .then(loginUser2 => {
      console.log(loginUser2);
    })
    .catch(alert);



// original example 
    class UserStorage{
      loginUser(id, password, onSuccess, onError) {
          setTimeout(() => {
            if (
              (id ==='ellie' && password ==='dream') ||
              (id ==='coder' && password === 'academy')
            ) {
              onSuccess(id);
            } else {
              onError(new Error('not found'));
            }
          }, 2000);
        }
    
      getRoles(user, onSuccess, onError) {
          setTimeout(() => {
            if (user === 'ellie') {
              onSuccess ({name : 'ellie', role : 'admin'});
            } else {
              onError(new Error('no found'));
            }
          }, 1000);
        }
      }

  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password =  prompt('enter your password');
  userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user, 
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role}`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
)