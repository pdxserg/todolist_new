import React, {useState} from 'react';
import './App.css';
import { Todolist} from "./Todolist";

 export type filterTasks='all'|'active'|'comp'

function App() {
    const [tasks, setTasks]= useState([
            {id: 1, title: "HTML",isDone: true},
            {id: 2, title: "CSS",isDone: true},
            {id: 3, title: "REACT",isDone: false}
        ]
    )
   const [filter, setFilter]=useState<filterTasks>("all")


const removeTask=(id: number)=>{
       const newTasks = tasks.filter(el => el.id !== id)
    setTasks(newTasks)

}
    const filterTasks= ((el: filterTasks)=>{
        setFilter(el)
    })

    let todolist = tasks
    if(filter === 'active'){
        todolist = tasks.filter(el => el.isDone === true)
    }if (filter === 'comp'){
        todolist = tasks.filter(el => el.isDone === false)
    }


  return (
    <div className="App">
        <Todolist
            title={"What to learn"}
            tasks={todolist}
            removeTask={removeTask}
            filterTasks={filterTasks}
        />

    </div>
  );
}

export default App;
