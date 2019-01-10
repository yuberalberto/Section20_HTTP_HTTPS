//Creating a Promise
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve("Resolved");
  }else{
    reject("Rejected");
  }
});

//Running the promise
promise
.then(result => result + '!')
.then(result2 => {
  throw Error;
  console.log(result2);
})
.catch(() => console.log("Oooops!"));

//Promise.all
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve("Resolved");
  }else{
    reject("Rejected");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'HIII');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'HIII');
});

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
  console.log(values);
});