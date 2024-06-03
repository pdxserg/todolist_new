import React from 'react';
import {TaskPropseType} from "./App";


type TodolistPropsType={
	title: string
	tasks:Array<TaskPropseType>
	removeTask:(taskId:string)=>void

}
 export const Todolist = ({title,tasks,removeTask  }:TodolistPropsType) => {
	return (
		<div>
			<h1>{title}</h1>
			<input type="text"/>
			<button>+</button>
			<ul>
				{tasks.map(task => {

					return <li key={task.id}>
						<input type="checkbox" checked={task.isDone}/>
						<span> {task.title} </span>
						<button onClick={()=>removeTask(task.id)}>x</button>
					</li>
				})}

			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>

		</div>
	);
};

