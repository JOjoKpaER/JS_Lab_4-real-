"use strict"

function f (init, func, x) {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			const res = init + func(x)
			console.log(res)
			resolve(res)
		}, 0)
	})
}

// n=3

let x = 3
f(0, (x) => x*x, x).
then((res)=> f(res, (x) => 2*x, x)).
then((res)=> f(res, (x)=> 3, x))