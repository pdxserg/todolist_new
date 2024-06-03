import React from 'react';
import {TaskPropseType} from "./App";


type TodolistPropsType={
	title: string
	tasks:Array<TaskPropseType>

}
 export const Todolist = ({title,tasks  }:TodolistPropsType) => {
	return (
		<div>
			<h1>{title}</h1>
			<input type="text"/>
			<button>+</button>
			<ul>
				{tasks.map(task => {
					return <li>
						<input type="checkbox" checked={task.isDone}/>
						<span> {task.title} </span>
						<button>x</button>
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

