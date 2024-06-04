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
	let [todolists, setTodolists] = useState<TodolistType[]>([
		{ id: v1(), title: 'What to learn', filter: 'ALL' },
		{ id: v1(), title: 'What to buy', filter: 'ALL' },
	])

	const [tasks, setTasks] = useState<Array<TaskPropseType>>([
		{id: v1(), title: "CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "React", isDone: false},
	])

	let tasksForTodolist = tasks


	const removeTask = (taskId: string) => {
		const newTasks = tasks.filter(f => f.id !== taskId)
		setTasks(newTasks)
	}
	const addTask = (title: string) => {
		const newTask = {id: v1(), title: title, isDone: false}
		setTasks([...tasks, newTask])
	}

	const changeStatus = (id: string, isDone: boolean) => {
		setTasks( tasks.map(t=> t.id === id? {...t, isDone: isDone}: t))
		// const newStatus = tasks.find(t => t.id === id)
		// if (newStatus) {
		// 	newStatus.isDone = isDone
		// }
		// setTasks([...tasks])
	}
	const filterTasks = (todolId:string, filter: FilterValue) => {
		setTodolists(todolists.map(tl=> tl.id === todolId? {...tl, filter}:tl))
	}
	return (
		<div className="app">

			{todolists.map(tl=>{
				let tasksForTodolist = tasks
				if (tl.filter === "ACTIVE") {
					tasksForTodolist = tasks.filter(f => f.isDone === true)
				}
				if (tl.filter === "COMPLITED") {
					tasksForTodolist = tasks.filter(f => f.isDone === false)
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
				/>
			})}

		</div>
	);
};

