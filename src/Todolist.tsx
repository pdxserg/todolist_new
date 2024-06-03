import React from 'react';
import {TaskPropseType} from "./App";
import {Button} from "./Button";


type TodolistPropsType = {
	title: string
	tasks: Array<TaskPropseType>
	removeTask: (taskId: string) => void

}
export const Todolist = ({title, tasks, removeTask}: TodolistPropsType) => {
	return (
		<div>
			<h1>{title}</h1>
			<input type="text"/>
			<button>+</button>
			<ul>
				{tasks.length === 0
					? <p> Nothing here </p>
					: tasks.map(task => {

						return <li key={task.id}>
							<input type="checkbox" checked={task.isDone}/>
							<span> {task.title} </span>
							<Button onClick={() => removeTask(task.id)}
							title={"X"}/>

						</li>
					})
				}


			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>

		</div>
	);
};

