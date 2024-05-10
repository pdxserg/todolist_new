import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";
import {logDOM} from "@testing-library/react";

export type filterTasks = 'all' | 'active' | 'comp'
export type TodolistsPropsType = {
	id: string,
	title: string,
	filter: filterTasks
}

function App() {

	const todolist1 = v1()
	const todolist2 = v1()

	const [todolists, setTodolists] = useState<TodolistsPropsType[]>([
		{id: todolist1, title: "What to learn", filter: "all"},
		{id: todolist2, title: "What to bay", filter: "all"}
	])
	const [tasksObj, setTasksObj] = useState({
			[todolist1]: [
				{id: v1(), title: "HTML", isDone: true},
				{id: v1(), title: "CSS", isDone: true},
				{id: v1(), title: "REACT", isDone: false}],
			[todolist2]: [
				{id: v1(), title: "milk", isDone: true},
				{id: v1(), title: "water", isDone: true},
				{id: v1(), title: "sugar", isDone: false}]
		}
	)
	console.log(tasksObj)
	const changeStatus = (todolistID: string,taskId: string, isDone: boolean) => {
		let tasks = tasksObj[todolistID]
		const task = tasks.find(el => el.id === taskId)
		if (task) {
			 	task.isDone = isDone
			setTasksObj({...tasksObj})
		}

		// const task = tasks.find(el => el.id === taskId)
		// if (task) {
		// 	task.isDone = isDone
		// }
		// setTasks([...tasks,])

	}


	const addTask = (todolistID: string, el: string) => {
		// tasksObj[todolistID]=[{id: v1(), title: el, isDone: false}, ...tasksObj[todolistID]]
		// setTasksObj({...tasksObj})

		const task = {id: v1(), title: el, isDone: false}
		let tasks = tasksObj[todolistID]
		let newTasks =[task, ...tasks]
		tasksObj[todolistID]=newTasks
		setTasksObj({...tasksObj})

		// 	const newTask = {id: v1(), title: el, isDone: false}
		// 	setTasks([newTask, ...tasks])
	}


	const removeTodolist=(todolistID: string)=>{
		const newTodolist = todolists.filter(el=>el.id !==todolistID)
		delete tasksObj[todolistID]
		setTodolists(newTodolist)

	}
	const removeTask = (todolistID: string, id: string) => {
		// in one row!!!!
		// setTasksObj({...tasksObj,[todolistID]:tasksObj[todolistID].filter(el => el.id !== id)})
		let tasks = tasksObj[todolistID]
		const newTasks = tasks.filter(el => el.id !== id)
		tasksObj[todolistID]=newTasks
		setTasksObj({...tasksObj})

	}

	const filterTasks = ((todolistID: string, el: filterTasks) => {
		const todol = todolists.find(t => t.id === todolistID)
		if (todol) {
			todol.filter = el
		}
		setTodolists([...todolists,])
	})


	return (
		<div className="App">
			{todolists.map(el => {
				let todolistsFilter = tasksObj[el.id]
				if (el.filter === 'active') {
					todolistsFilter = tasksObj[el.id].filter(el => el.isDone === false)
				}
				if (el.filter === 'comp') {
					todolistsFilter = tasksObj[el.id].filter(el => el.isDone === true)
				}

				return (
					<Todolist
						key={el.id}
						title={el.title}
						tasks={todolistsFilter}
						removeTask={removeTask}
						filterTasks={filterTasks}
						addTask={addTask}
						changeStatus={changeStatus}
						filter={el.filter}
						todolistID={el.id}
						removeTodolist={removeTodolist}
					/>
				)
			})}


		</div>
	);
}

export default App;
