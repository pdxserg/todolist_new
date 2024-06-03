import React, {useState} from 'react';
import {Todolist} from "./Todolist";

export type FilterValue = "ALL" | "ACTIVE" | "COMPLITED"
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
	// const [filter, setFilter] = useState<FilterValue>("ALL")
	// let tasksForTodolist = tasks
	// if (filter === "ACTIVE") {
	// 	tasksForTodolist = tasksForTodolist.filter(f => f.isDone === true)
	// }
	// if (filter === "COMPLITED") {
	// 	tasksForTodolist = tasksForTodolist.filter(f => f.isDone === false)
	// }
	// const filterTasks = (filter: FilterValue) => {
	// 	setFilter(filter)
	// }

	const removeTask = (taskId: string) => {
		const newTasks = tasks.filter(f => f.id !== taskId)
		setTasks(newTasks)
	}

	return (
		<div className="app">
			<Todolist
				title={"What  to learn"}
				tasks={tasks}
				removeTask={removeTask}
				// filterTasks={filterTasks}
			/>
		</div>
	);
};

