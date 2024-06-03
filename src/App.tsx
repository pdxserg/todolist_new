import React from 'react';
import {Todolist} from "./Todolist";


 export  type TaskPropseType= {
	id: string
	title: string
	isDone: boolean
}
 export const App = () => {
 	const tasks:Array<TaskPropseType> = [
		{id: "1", title: "CSS", isDone: true},
		{id: "2", title: "JS", isDone: true},
		{id: "3", title: "React", isDone: false},
	]

const removeTask =()=>{

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

