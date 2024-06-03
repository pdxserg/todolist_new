import React, {useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValue = "ALL" | "ACTIVE" | "COMPLITED"
export  type TaskPropseType = {
	id: string
	title: string
	isDone: boolean
}
export const App = () => {
	const [tasks, setTasks] = useState<Array<TaskPropseType>>([
		{id: v1(), title: "CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "React", isDone: false},
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
	const addTask = (title: string) => {
		const newTask = {id: v1(), title: title, isDone: false}
		setTasks([...tasks, newTask])
	}

	const changeStatus = (id: string, isDone: boolean) => {
		setTasks( tasks.map(t=> t.id === id? {...t, isDone: isDone}: t))

		// const newStatus = tasks.find(t => t.id === id)
		// if (newStatus) {
		// 	newStatus.isDone = isDone
		// }
		// setTasks([...tasks])
	}
	return (
		<div className="app">
			<Todolist
				title={"What  to learn"}
				tasks={tasks}
				removeTask={removeTask}
				// filterTasks={filterTasks}
				addTask={addTask}
				changeStatus={changeStatus}
			/>
		</div>
	);
};

