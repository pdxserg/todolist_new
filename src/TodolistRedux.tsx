import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValue, TaskPropseType} from "./App";
import {Button} from "./Button";
import './App.css';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./modules/store";
import {TodolistType} from "./AppWithRedux";
import {addTaskAC, changeTaskStatusAC, changeTitleTaskAC, removeTaskAC} from "./modules/tasks-reducer";
import {changeFilterTodoListAC, changeTitleTodoListAC, removeTodolistAC} from "./modules/todolists-reducer";


type PropsType = {
	todolist: TodolistType
}
export const TodolistWithRedux = ({todolist}: PropsType) => {
	// const todolist = useSelector<AppRootStateType, TodolistType>(state =>state.todolists.filter(t =>t.id === todolId)[0])
	const {id, title, filter} = todolist
	let tasks = useSelector<AppRootStateType, TaskPropseType[]>(state => state.tasks[id])
const dispatch = useDispatch()
	const addTaskCallback = (title: string) => {
		dispatch(addTaskAC(id, title))
	}
	const callBackHandler = (title: string) => {
		dispatch(changeTitleTodoListAC(id, title))
	}

	if (filter === "ACTIVE") {
		tasks = tasks.filter(f => f.isDone === true)
	}
	if (filter === "COMPLITED") {
		tasks = tasks.filter(f => f.isDone === false)
	}

	return (
		<div className={'todolist'}>
			<button onClick={() => dispatch(removeTodolistAC(id))}
			        className={"remove-todolist-button"}>x
			</button>
			<h1>
				<EditableSpan title={title} callBack={callBackHandler}/>
			</h1>

			<AddItemForm
				addItem={addTaskCallback}

			/>


			<ul>
				{tasks.length === 0
					? <p> Nothing here </p>
					: tasks.map(task => {
						const changeTaskStatusHendler = (e: ChangeEvent<HTMLInputElement>) => {
							dispatch(changeTaskStatusAC(id, task.id, e.currentTarget.checked))
						}
						const callBackTaskHandler = (newTitle: string) => {
							dispatch(changeTitleTaskAC(id, task.id, newTitle))
						}

						return <li key={task.id}
						           className={task.isDone ? 'is-done' : ""}>
							<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHendler}/>
							<EditableSpan title={task.title} callBack={callBackTaskHandler}/>
							{/*<span> {task.title} </span>*/}
							<Button onClick={() => dispatch(removeTaskAC(id, task.id))} title={"X"}/>

						</li>
					})
				}


			</ul>
			<div className={"foter-buttons"}>
				<Button title={"All"}
				        onClick={() => dispatch(changeFilterTodoListAC(id, "ALL"))}
				        className={filter === "ALL" ? 'active-filter' : ""}/>
				<Button title={"Active"}
				        onClick={() => dispatch(changeFilterTodoListAC(id, "ACTIVE"))}
				        className={filter === "ACTIVE" ? 'active-filter' : ""}/>
				<Button title={"Completed"}
				        onClick={() => dispatch(changeFilterTodoListAC(id, "COMPLITED"))}
				        className={filter === "COMPLITED" ? 'active-filter' : ""}/>
			</div>

		</div>
	);
};

