"use strict"

function readConfigPromise (name) {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			console.log('(1) config from ' + name + ' loaded')
			resolve()
		}, Math.floor(Math.random() * 1000))
	})
}

function doQueryPromise (statement) {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			console.log('(2) SQL query executed: ' + statement)
			resolve()
		}, Math.floor(Math.random() * 1000))
	})
}

function httpGetPromise (url) {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			console.log('(3) Page retrieved: ' + url)
			resolve()
		}, Math.floor(Math.random() * 1000))
	})
}

function readFilePromise (path) {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			console.log('(4) Readme file from ' + path + ' loaded')
			resolve()
		}, Math.floor(Math.random() * 1000))
	})
}


function callback () {
	console.log('It is done!')
}

//						ASYNC AWAIT
async function asyncAwait2(){
	await readConfigPromise('myConfig')
	await doQueryPromise('select * from cities')
	await httpGetPromise('http://google.com')
	await readFilePromise('README.md')
	await callback()
}

asyncAwait2()


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

async function F(x){
	const res1 = await f(0, (x) => x*x, x)
	const res2 = await f(res1, (x) => 2*x, x)
	await f(res2, (x)=> 3, x)
}

F(3)

