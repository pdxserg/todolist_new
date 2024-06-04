import React, {useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from "uuid";
import './App.css';

export type FilterValue = "ALL" | "ACTIVE" | "COMPLITED"
export  type TaskPropseType = {
	id: string
	title: string
	isDone: boolean
}
type TodolistType = {
	id: string
	title: string
	filter: FilterValue
}

export const App = () => {
	let todolistID1 = v1()
	let todolistID2 = v1()

	let [todolists, setTodolists] = useState<TodolistType[]>([
		{ id: todolistID1, title: 'What to learn', filter: 'ALL' },
		{ id: todolistID2, title: 'What to buy', filter: 'ALL' },
	])

	let [tasks, setTasks] = useState({
		[todolistID1]: [
			{ id: v1(), title: 'HTML&CSS', isDone: true },
			{ id: v1(), title: 'JS', isDone: true },
			{ id: v1(), title: 'ReactJS', isDone: false },
		],
		[todolistID2]: [
			{ id: v1(), title: 'Rest API', isDone: true },
			{ id: v1(), title: 'GraphQL', isDone: false },
		],
	})


	const removeTask = ( todolId:string, taskId: string) => {
		setTasks( {...tasks, [todolId]:tasks[todolId].filter(t=>t.id !== taskId ) })
	}
	const addTask = (todolId:string,title: string) => {
		const newTask= {id: v1(), title: title, isDone: false}
		setTasks( {...tasks, [todolId]:[ newTask, ...tasks[todolId]]})
	}

	const changeStatus = (todolId:string, id: string, isDone: boolean) => {
		setTasks({...tasks, [todolId]: tasks[todolId].map(t=> t.id === id ?{...t, isDone:isDone } :t)})






		// setTasks( tasks.map(t=> t.id === id? {...t, isDone: isDone}: t))
		//------------
		// const newStatus = tasks.find(t => t.id === id)
		// if (newStatus) {
		// 	newStatus.isDone = isDone
		// }
		// setTasks([...tasks])
	}
	const filterTasks = (todolId:string, filter: FilterValue) => {
		setTodolists(todolists.map(tl=> tl.id === todolId? {...tl, filter}:tl))
	}
	const removeTodolist =(todolId:string)=>{
setTodolists(todolists.filter(t=>t.id !== todolId))
		delete tasks[todolId]
	}
	console.log(tasks)
	return (
		<div className="app">
			{todolists.length === 0
			? <h2>NOTHIN</h2>
			: todolists.map((tl)=>{
						let tasksForTodolist = tasks[tl.id]
						if (tl.filter === "ACTIVE") {
							tasksForTodolist = tasks[tl.id].filter(f => f.isDone === true)
						}
						if (tl.filter === "COMPLITED") {
							tasksForTodolist = tasks[tl.id].filter(f => f.isDone === false)
						}



						return  <Todolist
							key={tl.id}
							todolId={tl.id}
							title={tl.title}
							tasks={tasksForTodolist}
							removeTask={removeTask}
							filterTasks={filterTasks}
							addTask={addTask}
							changeStatus={changeStatus}
							filter={tl.filter}
							removeTodolist={removeTodolist}
						/>
					})}



		</div>
	);
};

