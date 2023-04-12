"use strict"

async function wait() {
await new Promise(resolve => setTimeout(resolve, 1000));
return 10;
}
function f() {
const data = wait().
then((data)=> console.log(data))
}

f()