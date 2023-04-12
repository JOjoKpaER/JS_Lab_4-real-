"use strict"

function starttask(name, n_task){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log("%s, started the %i task.", name, n_task)
			resolve()
		},0)
	})
}

function dotask(time){
	return new Promise((resolve, reject)=> {
		setTimeout(()=> resolve(), time)
	})
}

function endtask(name, n_task){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log("%s completed the %i task.", name, n_task)
			resolve()
		}, 0)
	})
}

function startdefensetask(name, n_task){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log("%s moved tp the defense of the %i task.", name, n_task)
			resolve()
		},0)
	})
}

function dodefesetask(time){
	return new Promise((resolve, reject)=>{
		setTimeout(()=> resolve(), time)
	})
}

function restmessage(name){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log("%s is resting.", name)
			resolve()
		}, 0)
	})
}

function rest(time){
	return new Promise((resolve, reject)=>{
		setTimeout(()=> resolve(), time)
	})
}

async function interviews(array_tasks){
	for(let i in array_tasks){
		let name = array_tasks[i][0]
		let task1_time = array_tasks[i][1]
		let def1_time = array_tasks[i][2]
		let rest_time = 5
		let task2_time = array_tasks[i][3]
		let def2_time = array_tasks[i][4]
		new Promise(async (resolve, reject)=>{
			// task 1
			await starttask(name, 1)
			await dotask(task1_time)
			await startdefensetask(name, 1)
			await dodefesetask(def1_time)
			await endtask(name, 1)
			await restmessage(name)
			await rest(rest_time)
			// task 2
			await starttask(name, 2)
			await dotask(task2_time)
			await startdefensetask(name, 2)
			await dodefesetask(def2_time)
			await endtask(name, 2)		
			resolve()
		})
	}
}

interviews([['Ivan', 5, 2, 7, 2],
			['John', 3, 4, 5, 1],
			['Sophia', 4, 2, 5, 1]])