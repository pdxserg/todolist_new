import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValue, TaskPropseType} from "./App";
import {Button} from "./Button";
import './App.css';


type TodolistPropsType = {
	title: string
	tasks: Array<TaskPropseType>
	removeTask: (taskId: string) => void
	// filterTasks:(filter:FilterValue)=>void
	addTask: (title: string) => void
	changeStatus: (id: string, isDone: boolean) => void

}
export const Todolist = ({title, tasks, removeTask, addTask, changeStatus}: TodolistPropsType) => {
	const [error, setError] = useState<string | null>(null)
	const [newTask, setNewtask] = useState("")
	const [filter, setFilter] = useState<FilterValue>("ALL")
	if (filter === "ACTIVE") {
		tasks = tasks.filter(f => f.isDone === true)
	}
	if (filter === "COMPLITED") {
		tasks = tasks.filter(f => f.isDone === false)
	}
	const filterTasks = (filter: FilterValue) => {
		setFilter(filter)
	}
	const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setNewtask(event.currentTarget.value)

	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.key === "Enter") {
			addTaskHandler()
		}

	}
	const addTaskHandler = () => {
		if (newTask.trim() !== "") {
			addTask(newTask.trim())
			setNewtask("")
		} else {
			setError('Title is requred')
		}
	}

	return (
		<div className={'todolist'}>
			<h1>{title}</h1>
			<div>
				<input
					className={error ? "error" : ""}
					type="text"
					value={newTask}
					onChange={onchangeHandler}
					onKeyDown={onKeyDownHandler}
				/>
				<button onClick={addTaskHandler}>+</button>
				{error && <div className={'error-message'}>{error}</div>}
			</div>

			<ul>
				{tasks.length === 0
					? <p> Nothing here </p>
					: tasks.map(task => {
						const changeTaskStatusHendler = (e: ChangeEvent<HTMLInputElement>) => {
							changeStatus(task.id, e.currentTarget.checked)
						}
						return <li key={task.id}
						className={task.isDone ? 'is-done': ""}>
							<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHendler}/>
							<span> {task.title} </span>
							<Button onClick={() => removeTask(task.id)} title={"X"}/>

						</li>
					})
				}


			</ul>
			<div className={"foter-buttons"} >
				<Button title={"All"}
				        onClick={() => filterTasks("ALL")}
				        className={filter === "ALL" ? 'active-filter' : ""}/>
				<Button title={"Active"}
				        onClick={() => filterTasks("ACTIVE")}
						className={filter === "ACTIVE" ? 'active-filter' : ""}/>
				<Button title={"Completed"}
				        onClick={() => filterTasks("COMPLITED")}
				        className={filter === "COMPLITED" ? 'active-filter' : ""}/>
			</div>

		</div>
	);
};

