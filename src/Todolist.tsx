// @flow
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterTasks} from "./App";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type TodolistPropsType = {
	title: string
	tasks: Array<TaskType>
	filterTasks: (el: filterTasks) => void
	removeTask: (id: string) => void
	addTask: (el: string) => void
	changeStatus:(taskId:string, isDone: boolean)=>void
};
export const Todolist = ({title, filterTasks, addTask, changeStatus, removeTask, tasks}: TodolistPropsType) => {
	const [newTask, setNewTask] = useState("")
	const onChangeHandler = (el: ChangeEvent<HTMLInputElement>) => {
		setNewTask(el.currentTarget.value)
	}
	const setNewTaskHandler = () => {
		addTask(newTask)
		setNewTask("")
	}
	const onKeyHandler = (el: KeyboardEvent<HTMLInputElement>) => {
		if (el.key === "Enter") {
			addTask(newTask.trim())
			setNewTask("")
		}
	}



	const tasksListHandler = tasks.map(el => {
		const removeTaskHandler = () => {
			removeTask(el.id)
		}
		const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
			changeStatus( el.id, e.currentTarget.checked)
		}

		return <li key={el.id}>
			{el.title}<input type="checkbox"  onChange={checkBoxHandler} checked={el.isDone}/>
			<button onClick={removeTaskHandler}>x</button>
		</li>
	})
	return (
		<div>
			<div className="container">
				<h2>{title}</h2>
				<div>
					<input type="text" value={newTask} onChange={onChangeHandler} onKeyUp={onKeyHandler}/>
					<button onClick={setNewTaskHandler}>+</button>

				</div>
				<ul>
					{tasks.length === 0
						? <p> Task not exist</p>
						: tasksListHandler
					}


				</ul>
				<div className={"container-button"}>
					<button onClick={() => filterTasks('all')}>All</button>
					<button onClick={() => filterTasks('active')}>Active</button>
					<button onClick={() => filterTasks('comp')}>Completed</button>
				</div>


			</div>

		</div>
	);
};