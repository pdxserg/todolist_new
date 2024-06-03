import React, {ChangeEvent, useState} from 'react';
import {FilterValue, TaskPropseType} from "./App";
import {Button} from "./Button";


type TodolistPropsType = {
	title: string
	tasks: Array<TaskPropseType>
	removeTask: (taskId: string) => void
	// filterTasks:(filter:FilterValue)=>void
	addTask:(title: string)=>void

}
export const Todolist = ({title, tasks, removeTask,addTask }: TodolistPropsType) => {

	const [newTask, setNewtask]=useState("")
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
	const onchangeHandler=(event: ChangeEvent<HTMLInputElement>)=>{
			setNewtask(event.currentTarget.value)

	}
		const addTaskHandler=()=>{
			 addTask(newTask)
		}
	return (
		<div>
			<h1>{title}</h1>
			<input type="text" value={newTask} onChange={onchangeHandler}/>
			<button onClick={addTaskHandler}>+</button>
			<ul>
				{tasks.length === 0
					? <p> Nothing here </p>
					: tasks.map(task => {

						return <li key={task.id}>
							<input type="checkbox" checked={task.isDone}/>
							<span> {task.title} </span>
							<Button onClick={() => removeTask(task.id)} title={"X"}/>

						</li>
					})
				}


			</ul>
			<div>
				<Button title={"All"} onClick={()=>filterTasks("ALL")}/>
				<Button title={"Active"} onClick={()=>filterTasks("ACTIVE")}/>
				<Button title={"Completed"} onClick={()=>filterTasks("COMPLITED")}/>
			</div>

		</div>
	);
};

