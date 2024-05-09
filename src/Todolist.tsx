// @flow
import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {filterTasks} from "./App";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type TodolistPropsType = {
	title: string
	tasks: Array<TaskType>
	filterTasks: (el:filterTasks) => void
	removeTask: (id: string) => void
	addTask:(el:string)=>void
};
export const Todolist = ({title, filterTasks, addTask, removeTask, tasks}: TodolistPropsType) => {
 const [newTask, setNewTask]=useState("")
	const onChangeHandler= (el:ChangeEvent<HTMLInputElement> )=>{
	 setNewTask(el.currentTarget.value)
	}
	const setNewTaskHandler=()=>{
		addTask(newTask)
		setNewTask("")
	}

	const tasksListHandler = tasks.map(el => {
		const removeTaskHandler = () => {
			removeTask(el.id)
		}

		return <li key={el.id}>
			{el.title}<input type="checkbox" checked={el.isDone}/>
			<button onClick={removeTaskHandler}>x</button>
		</li>
	})
	return (
		<div>
			<div className="container">
				<h2>{title}</h2>
				<input type="text" value={newTask} onChange={onChangeHandler}/>
				<button onClick={setNewTaskHandler}>+</button>
				<ul>
					{tasks.length === 0
						? <p> Task not exist</p>
						: tasksListHandler
					}


				</ul>
				<div className={"container-button"}>
					<button onClick={()=>filterTasks('all')}>All</button>
					<button onClick={()=>filterTasks('active')}>Active</button>
					<button onClick={()=>filterTasks('comp')}>Completed</button>
				</div>


			</div>

		</div>
	);
};