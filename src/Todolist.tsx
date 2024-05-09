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

};
export const Todolist = ({title, tasks}: TodolistPropsType) => {

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
					<button>All</button>
					<button>Active</button>
					<button>Completed</button>
				</div>


			</div>

		</div>
	);
};