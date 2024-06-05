import React, {useReducer, useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from "uuid";
import './App.css';
import {AddItemForm} from "./components/AddItemForm";
import {
	addTodoListAC,
	changeFilterTodoListAC,
	changeTitleTodoListAC,
	removeTodolistAC,
	todolistsReducer
} from "./modules/todolists-reducer";

export type FilterValue = "ALL" | "ACTIVE" | "COMPLITED"

type TasksPropsType = {
	[key: string]: TaskPropseType[]
}

export  type TaskPropseType = {
	id: string
	title: string
	isDone: boolean
}
export type TodolistType = {
	id: string
	title: string
	filter: FilterValue
}

export const App = () => {
	let todolistID1 = v1()
	let todolistID2 = v1()

	let [todolists, dispatch] = useReducer(todolistsReducer, [
		{id: todolistID1, title: 'What to learn', filter: 'ALL'},
		{id: todolistID2, title: 'What to buy', filter: 'ALL'},
	])

	let [tasks, setTasks] = useState<TasksPropsType>({
		[todolistID1]: [
			{id: v1(), title: 'HTML&CSS', isDone: true},
			{id: v1(), title: 'JS', isDone: true},
			{id: v1(), title: 'ReactJS', isDone: false},
		],
		[todolistID2]: [
			{id: v1(), title: 'Rest API', isDone: true},
			{id: v1(), title: 'GraphQL', isDone: false},
		],
	})


	const removeTask = (todolId: string, taskId: string) => {
		setTasks({...tasks, [todolId]: tasks[todolId].filter(t => t.id !== taskId)})
	}
	const addTask = (todolId: string, title: string) => {
		const newTask = {id: v1(), title: title, isDone: false}
		setTasks({...tasks, [todolId]: [newTask, ...tasks[todolId]]})
	}

	const changeStatus = (todolId: string, id: string, isDone: boolean) => {
		setTasks({...tasks, [todolId]: tasks[todolId].map(t => t.id === id ? {...t, isDone: isDone} : t)})
	}
	const filterTasks = (todolId: string, filter: FilterValue) => {
		dispatch(changeFilterTodoListAC(todolId, filter))
	}
 	const removeTodolist = (todolId: string) => {
		dispatch(removeTodolistAC(todolId))
 		delete tasks[todolId]
		setTasks({...tasks})
	}
	const addTodolist = (title: string) => {
		const newId = "SSSSSSS"
		const newTodolist: TodolistType = {id: newId, title: title, filter: 'ALL'}
		dispatch(addTodoListAC(title, newId))
		// setTodolists([ newTodolist , ...todolists])
		setTasks({...tasks, [newId]: []})
	}

	const changeTitleTodolist = (todolId: string, newTitle: string) => {
		dispatch(changeTitleTodoListAC(todolId, newTitle))
	}
	const changeTitleTask = (todolId: string, taskId: string, newTitle: string) => {
		setTasks({...tasks, [todolId]: tasks[todolId].map(t => t.id === taskId ? {...t, title: newTitle} : t)})
	}

	return (
		<div className="app">

			<AddItemForm addItem={addTodolist}/>
			{todolists.length === 0
				? <h2>NOTHIN</h2>
				: todolists.map((tl) => {
					let tasksForTodolist = tasks[tl.id]
					if (tl.filter === "ACTIVE") {
						tasksForTodolist = tasks[tl.id].filter(f => f.isDone === true)
					}
					if (tl.filter === "COMPLITED") {
						tasksForTodolist = tasks[tl.id].filter(f => f.isDone === false)
					}


					return <Todolist
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
						changeTitleTodolist={changeTitleTodolist}
						changeTitleTask={changeTitleTask}
					/>
				})}


		</div>
	);
};

