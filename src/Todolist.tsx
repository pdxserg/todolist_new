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
	changeStatus: (taskId: string, isDone: boolean) => void
	filter: filterTasks
};
export const Todolist = ({title, filterTasks, addTask, changeStatus, filter, removeTask, tasks}: TodolistPropsType) => {
	const [newTask, setNewTask] = useState("")
	const [error, setError] = useState<string | null>(null)

	const onChangeHandler = (el: ChangeEvent<HTMLInputElement>) => {
		setNewTask(el.currentTarget.value)
	}
	const setNewTaskHandler = () => {
		if (newTask.trim() === "") {
			return setError("Field is required")
		}
		if (newTask.trim() === "xxx") {
			return setError("Field is required")
		}
		addTask(newTask.trim())
		setNewTask("")


	}
	const onKeyHandler = (el: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (el.key === "Enter" && newTask.trim().length > 0) {
			addTask(newTask.trim())
			setNewTask("")
		}
	}


	const tasksListHandler = tasks.map(el => {
		const removeTaskHandler = () => {
			removeTask(el.id)
		}
		const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
			changeStatus(el.id, e.currentTarget.checked)
		}

		return <li className={el.isDone ?"opasity":''} key={el.id}>
			{el.title}<input type="checkbox" onChange={checkBoxHandler} checked={el.isDone}/>
			<button onClick={removeTaskHandler}>x</button>
		</li>
	})
	return (
		<div>
			<div className="container">
				<h2>{title}</h2>
				<div>
					<input type="text" value={newTask} onChange={onChangeHandler} onKeyUp={onKeyHandler}
					       className={error ? "error" : ""}/>
					<button onClick={setNewTaskHandler}>+</button>
					{error && <div className="error-message"> {error}</div>}

				</div>
				<ul>
					{tasks.length === 0
						? <p> Task not exist</p>
						: tasksListHandler
					}


				</ul>
				<div className={"container-button"}>
					<button className={filter === 'all' ? "activ-filter" : ""}
					        onClick={() => filterTasks('all')}>All
					</button>
					<button className={filter === 'active' ? "activ-filter" : ""}
					        onClick={() => filterTasks('active')}>Active
					</button>
					<button className={filter === 'comp' ? "activ-filter" : ""}
					        onClick={() => filterTasks('comp')}>Completed
					</button>
				</div>


			</div>

		</div>
	);
};