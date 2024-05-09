import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const tasks =[
        {id: 1, title: "HTML",isDone: true},
        {id: 2, title: "CSS",isDone: true},
        {id: 3, title: "REACT",isDone: false}
    ]
    const tasks2 =[
        {id: 1, title: "MILK",isDone: true},
        {id: 2, title: "TEA",isDone: true},
        {id: 3, title: "COFFE",isDone: false}
    ]

  return (
    <div className="App">
        <Todolist title={"What to learn"} tasks={tasks}/>
        <Todolist title={"What to buy"} tasks={tasks2}/>

    </div>
  );
}

export default App;
