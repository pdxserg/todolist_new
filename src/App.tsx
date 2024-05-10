import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterTasks = 'all' | 'active' | 'comp'
export type TodolistsPropsType= {
	id: string,
	title: string,
	filter:filterTasks
}
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


	const addTask = (el: string) => {
		const newTask = {id: v1(), title: el, isDone: false}
		setTasks([newTask, ...tasks])
	}
	const removeTask = (id: string) => {
		const newTasks = tasks.filter(el => el.id !== id)
		setTasks(newTasks)

	}
	const filterTasks = ((todolistID:string, el: filterTasks) => {
const todolist = todolists.find(el=> el.id === todolistID)
		if(todolist){
			todolist.filter=el
		}
setTodolists([...todolists])
	})


const [todolists, setTodolists] =useState<TodolistsPropsType[]> ([
			{id: v1(), title: "What to learn", filter:"all"},
			{id: v1(), title: "What to bay", filter:"comp"}
		]

	)


	return (
		<div className="App">
			{todolists.map(el =>{
				let todolistsFilter = tasks
				if (el.filter === 'active') {
					todolistsFilter = tasks.filter(el => el.isDone === false)
				}
				if (el.filter === 'comp') {
					todolistsFilter = tasks.filter(el => el.isDone === true)
				}

				return(
					<Todolist
						key={el.id}
						title={el.title}
						tasks={todolistsFilter}
						removeTask={removeTask}
						filterTasks={filterTasks}
						addTask={addTask}
						changeStatus={changeStatus}
						filter={el.filter}
						todolistID={el.id}
					/>
				)
			})}


		</div>
	);
}

export default App;
