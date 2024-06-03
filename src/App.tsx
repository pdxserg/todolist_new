import React, {useState} from 'react';
import {Todolist} from "./Todolist";


 export  type TaskPropseType= {
	id: string
	title: string
	isDone: boolean
}
 export const App = () => {
 	const [tasks,setTasks]=useState<Array<TaskPropseType>>([
			 {id: "1", title: "CSS", isDone: true},
			 {id: "2", title: "JS", isDone: true},
			 {id: "3", title: "React", isDone: false},
		 ]

	 )

const removeTask =(taskId:string)=>{
const newTasks = tasks.filter(f=>f.id !== taskId)
	setTasks(newTasks)
}

	return (
		<div className="app">
			<Todolist
				title={"What  to learn"}
				tasks={tasks}
				removeTask={removeTask}
			/>
		</div>
	);
};

