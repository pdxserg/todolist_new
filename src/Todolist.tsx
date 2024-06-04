import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValue, TaskPropseType} from "./App";
import {Button} from "./Button";
import './App.css';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";


type TodolistPropsType = {
	title: string
	tasks: Array<TaskPropseType>
	removeTask: (todolId: string, taskId: string) => void
	filterTasks: (todolId: string, filter: FilterValue) => void
	addTask: (todolId: string, title: string) => void
	changeStatus: (todolId: string, id: string, isDone: boolean) => void
	filter: FilterValue
	todolId: string
	removeTodolist: (todolId: string) => void
	changeTitleTodolist: (todolId: string, newTitle: string) => void
	changeTitleTask: (todolId: string, taskId: string, newTitle: string) => void

}
export const Todolist = ({
	                         title,
	                         tasks,
	                         removeTask,
	                         addTask,
	                         changeStatus,
	                         filter,
	                         filterTasks,
	                         todolId,
	                         removeTodolist,
	                         changeTitleTodolist,
	                         changeTitleTask
                         }: TodolistPropsType) => {


	// const [filter, setFilter] = useState<FilterValue>("ALL")
	// if (filter === "ACTIVE") {
	// 	tasks = tasks.filter(f => f.isDone === true)
	// }
	// if (filter === "COMPLITED") {
	// 	tasks = tasks.filter(f => f.isDone === false)
	// }
	// const filterTasks = (filter: FilterValue) => {
	// 	setFilter(filter)
	// }
	const addTaskCallback = (title: string) => {
		addTask(todolId, title)
	}
	const callBackHandler = (title: string) => {
		changeTitleTodolist(todolId, title)
	}

	return (
		<div className={'todolist'}>
			<button onClick={() => removeTodolist(todolId)}
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
							changeStatus(todolId, task.id, e.currentTarget.checked)
						}
						const callBackTaskHandler = ( newTitle:string) => {
							changeTitleTask(todolId , task.id, newTitle)
						}

						return <li key={task.id}
						           className={task.isDone ? 'is-done' : ""}>
							<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHendler}/>
							<EditableSpan title={task.title} callBack={callBackTaskHandler}/>
							{/*<span> {task.title} </span>*/}
							<Button onClick={() => removeTask(todolId, task.id)} title={"X"}/>

						</li>
					})
				}


			</ul>
			<div className={"foter-buttons"}>
				<Button title={"All"}
				        onClick={() => filterTasks(todolId, "ALL")}
				        className={filter === "ALL" ? 'active-filter' : ""}/>
				<Button title={"Active"}
				        onClick={() => filterTasks(todolId, "ACTIVE")}
				        className={filter === "ACTIVE" ? 'active-filter' : ""}/>
				<Button title={"Completed"}
				        onClick={() => filterTasks(todolId, "COMPLITED")}
				        className={filter === "COMPLITED" ? 'active-filter' : ""}/>
			</div>

		</div>
	);
};

