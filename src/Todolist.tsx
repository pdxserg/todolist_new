// @flow
import React, {MouseEvent} from 'react';

type TaskType = {
	id: number
	title: string
	isDone: boolean
}

type TodolistPropsType = {
	title: string
	tasks: Array<TaskType>
	filterTasks: () => void
	removeTask: (id: number) => void

};
export const Todolist = ({title, filterTasks, removeTask, tasks}: TodolistPropsType) => {


	const tasksListHandler = tasks.map(el => {
		const removeTaskHandler = (e: MouseEvent<HTMLButtonElement>) => {
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
				<input type="text"/>
				<button>+</button>
				<ul>
					{tasks.length === 0
						? <p> Task not exist</p>
						: tasksListHandler
					}


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