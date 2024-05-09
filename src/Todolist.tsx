// @flow
import * as React from 'react';

type TaskType={
	id:number
	title:string
	isDone:boolean
}

type TodolistPropsType = {
	title:string
	tasks: Array<TaskType>
	filterTasks:()=>void

};
export const Todolist = ({title, filterTasks, tasks}: TodolistPropsType) => {

	const tasksListHandler = tasks.map(el=> {
		return <li>
			{el.title}<input type="checkbox" checked={el.isDone}/>
			<button>x</button>
		</li>
	})
	return (
		<div>
			<div className="container">
				<h2>{title}</h2>
				<input type="text"/>
				<button>+</button>
				<ul>
					{tasksListHandler}

				</ul>
				<div className={"container-button"}>
					<button onClick={filterTasks}>All</button>
					<button onClick={filterTasks}>Active</button>
					<button onClick={filterTasks}>Completed</button>
				</div>


			</div>

		</div>
	);
};