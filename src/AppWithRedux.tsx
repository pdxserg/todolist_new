import React from 'react';
import {v1} from "uuid";
import './App.css';
import {AddItemForm} from "./components/AddItemForm";
import {
	addTodoListAC,
	changeFilterTodoListAC,
	changeTitleTodoListAC,
	removeTodolistAC,

} from "./modules/todolists-reducer";
import {
	addTaskAC,
	changeTaskStatusAC,
	changeTitleTaskAC,
	removeTaskAC,
} from "./modules/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {TodolistWithRedux} from "./TodolistRedux";
import {todolistkSelector} from "./modules/selectors";

export type FilterValue = "ALL" | "ACTIVE" | "COMPLITED"

export type TasksPropsType = {
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

export const AppWithRedux = () => {
	let todolistID1 = v1()
	let todolistID2 = v1()

	let todolists = useSelector(todolistkSelector)

	const dispatch = useDispatch()

	const removeTask = (todolId: string, taskId: string) => {
		dispatch(removeTaskAC(todolId, taskId))
	}
	const addTask = (todolId: string, title: string) => {
		dispatch(addTaskAC(todolId, title))
	}

	const changeStatus = (todolId: string, id: string, isDone: boolean) => {
		dispatch(changeTaskStatusAC(todolId, id, isDone))
	}
	const filterTasks = (todolId: string, filter: FilterValue) => {
		dispatch(changeFilterTodoListAC(todolId, filter))
	}
	const removeTodolist = (todolId: string) => {
		let action = removeTodolistAC(todolId)
		dispatch(action)


	}
	const addTodolist = (title: string) => {
		let action = addTodoListAC(title)
		dispatch(action)
	}

	const changeTitleTodolist = (todolId: string, newTitle: string) => {
		dispatch(changeTitleTodoListAC(todolId, newTitle))
	}
	const changeTitleTask = (todolId: string, taskId: string, newTitle: string) => {
		dispatch(changeTitleTaskAC(todolId, taskId, newTitle))
	}

	return (
		<div className="app">

			<AddItemForm addItem={addTodolist}/>
			{todolists.length === 0
				? <h2>NOTHIN</h2>
				: todolists.map((tl) => {

					return <TodolistWithRedux
						key={tl.id}
						todolist={tl}
					/>
				})}


		</div>
	);
};

