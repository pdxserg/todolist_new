import React, {useState} from 'react';
import {Todolist} from "./Todolist";

type FilteredTask = "ALL" | "ACTIVE"| "COMPLITED"
export  type TaskPropseType = {
	id: string
	title: string
	isDone: boolean
}
export const App = () => {
	const [tasks, setTasks] = useState<Array<TaskPropseType>>([
		{id: "1", title: "CSS", isDone: true},
		{id: "2", title: "JS", isDone: true},
		{id: "3", title: "React", isDone: false},
	])
	const [filter, setFilter] = useState("ALL")
	let filteredTasks = tasks
	if (filter === "ACTIVE") {
		filteredTasks = filteredTasks.filter(f => f.isDone === true)
	}
	if (filter === "COMPLITED") {
		filteredTasks = filteredTasks.filter(f => f.isDone === false)
	}
const filterTasks =(filter:string)=>{
	setFilter(filter)
}

	const removeTask = (taskId: string) => {
		const newTasks = tasks.filter(f => f.id !== taskId)
		setTasks(newTasks)
	}

	return (
		<div className="app">
			<Todolist
				title={"What  to learn"}
				tasks={filteredTasks}
				removeTask={removeTask}
				filterTasks={filterTasks}
			/>
		</div>
	);
};

