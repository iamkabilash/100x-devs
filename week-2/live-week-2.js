let start = performance.now();

setTimeout(() => {
  console.log("3s over");
  let end = performance.now();
  console.log("3s: ", end - start);
}, 3000);

console.log("Let me run");

setTimeout(() => {
  console.log("1s over");
  let end = performance.now();
  console.log("1s: ", end - start);
}, 1000);

/*
// output
Let me run
1s over
1s:  1012.4654450006783
3s over
3s:  3002.7012610007077
*/

function ownSetTimeout(fn, duration) {
  console.log("function called");
  setTimeout(fn, duration);
}
ownSetTimeout(() => {
  console.log("1s over");
}, 1000);

console.log("hellooooo");

/*
// output
function called
hellooooo
1s over
*/

// using callbacks
function asyncFunction(cb) {
  setTimeout(cb, 2000);
}

asyncFunction(() => {
  console.log("2s over");
});

// using promise
function asyncFunction2(cb) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
  return p;
}
const value = asyncFunction2();
value.then(() => {
  console.log("2s over");
});

// using async await
function asyncFunctionAwait() {
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("2s over");
    }, 2000);
  });
  return p;
}
async function main() {
  const value = await asyncFunctionAwait();
  console.log(value);
}

main();
