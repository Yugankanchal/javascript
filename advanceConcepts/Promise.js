// creation of promise
const promiseOne = new Promise(function(resolve, reject){
    // do all async task
    // db Calls, cryptography, networks etc
    setTimeout(function(){
        console.log('async task 1');
        resolve()
    }, 1000)
});
// consumption of promise
promiseOne.then(function(){
    console.log('Promise completed');
})


const PromiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'yugank', email: 'yugankanchal@gmail.com'});
    } ,5000)
})

PromiseTwo.then(function(user){
    console.log(user);
})
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'yugank', email: 'yugankanchal@gmail.com'});
        }else{
            reject('something went wrong! ERROR')
        }
    } ,1000)
})
promiseThree.then(function(user){
    return user.username;
}).then(function(username){  // then carrying the data from previous thens
    console.log(username);
}).catch(function(err){
    console.log(err)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: 'javascript', password: '12345' });
        } else {
            reject('JS went Wrong!');
        }
    }, 1000)
})

async function consumePromise4() {
    try {
        console.log('hello');
        let response = await promiseFour; // this promise is an object not a function
        console.log(response);
    } catch (error) {
        console.log(error);
    }  
}

consumePromise4();

// async function getAllUsers() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data =  await response.json(); // converting data to JSON takes time
//     console.log(data);
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json(); // converting data to json takes time
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('error:', error);
})