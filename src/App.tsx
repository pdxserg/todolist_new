import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

type filterTasks='all'|'active'|'comp'

function App() {
    const [tasks, setTasks]= useState([
            {id: 1, title: "HTML",isDone: true},
            {id: 2, title: "CSS",isDone: true},
            {id: 3, title: "REACT",isDone: false}
        ]
    )
   const [filter, setFilter]=useState<filterTasks>("all")



    const filterTasks= (()=>{
        setTasks(filter)
    })

    let todolist = tasks
    if(filter === 'active'){
        const newFilterActive = todolist.map(el => el.isDone === true)
    }if (filter === 'comp'){
        const newFilterComp = todolist.map(el => el.isDone === false)
    }


  return (
    <div className="App">
        <Todolist
            title={"What to learn"}
            tasks={tasks}
            filterTasks={filterTasks}
        />

    </div>
  );
}

export default App;
