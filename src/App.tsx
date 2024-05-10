import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterTasks = 'all' | 'active' | 'comp'

function App() {
	const [tasks, setTasks] = useState([
			{id: v1(), title: "HTML", isDone: true},
			{id: v1(), title: "CSS", isDone: true},
			{id: v1(), title: "REACT", isDone: false}
		]
	)

    const changeStatus =(taskId:string, isDone: boolean)=>{
		const task =tasks.find(el=> el.id === taskId)
	    if(task){
		    task.isDone = isDone
	    }
	    setTasks([...tasks, ])

    }
	const [filter, setFilter] = useState<filterTasks>("all")

	const addTask = (el: string) => {
		const newTask = {id: v1(), title: el, isDone: false}
		setTasks([newTask, ...tasks])
	}
	const removeTask = (id: string) => {
		const newTasks = tasks.filter(el => el.id !== id)
		setTasks(newTasks)

	}
	const filterTasks = ((el: filterTasks) => {
		setFilter(el)
	})

	let todolists = tasks
	if (filter === 'active') {
		todolists = tasks.filter(el => el.isDone === false)
	}
	if (filter === 'comp') {
		todolists = tasks.filter(el => el.isDone === true)
	}


	return (
		<div className="App">
			<Todolist
				title={"What to learn"}
				tasks={todolists}
				removeTask={removeTask}
				filterTasks={filterTasks}
				addTask={addTask}
				changeStatus={changeStatus}
				filter={filter}
			/><Todolist
				title={"What to learn"}
				tasks={todolists}
				removeTask={removeTask}
				filterTasks={filterTasks}
				addTask={addTask}
				changeStatus={changeStatus}
				filter={filter}
			/>

		</div>
	);
}

export default App;
