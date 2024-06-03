import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValue, TaskPropseType} from "./App";
import {Button} from "./Button";


type TodolistPropsType = {
	title: string
	tasks: Array<TaskPropseType>
	removeTask: (taskId: string) => void
	// filterTasks:(filter:FilterValue)=>void
	addTask:(title: string)=>void
	changeStatus:(id: string, isDone: boolean)=>void

}
export const Todolist = ({title, tasks, removeTask,addTask, changeStatus }: TodolistPropsType) => {

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
			if(newTask.trim() !== ""){
				addTask(newTask.trim())
				setNewtask("")
		}}
		const onKeyDownHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
			if(e.key === "Enter"){
				addTaskHandler()
			}
		}
	return (
		<div>
			<h1>{title}</h1>
			<input type="text" value={newTask} onChange={onchangeHandler} onKeyDown={onKeyDownHandler}/>
			<button onClick={addTaskHandler}>+</button>
			<ul>
				{tasks.length === 0
					? <p> Nothing here </p>
					: tasks.map(task => {
						const changeTaskStatusHendler=(e:ChangeEvent<HTMLInputElement>)=>{
						changeStatus(task.id, e.currentTarget.checked)
						}
						return <li key={task.id}>
							<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHendler}/>
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

