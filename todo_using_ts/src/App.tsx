import React, { ChangeEvent, useState } from "react";
import './App.css'
import { ITask } from "./Interface";
import TodoTask from "./Components/TodoTask";


const App : React.FC =()=>{

  const [task, setTask]=useState<string>('');
  const [deadline,setDeadline] =useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange =(e:ChangeEvent<HTMLInputElement>) =>{
    if(e.target.name === 'task'){
      setTask(e.target.value)
    }else{
      setDeadline(Number(e.target.value))
    }
  }

  const completeTask=(taskNameToDelete:string) =>{
    setTodo(todo.filter((task)=>{
      return task.taskName != taskNameToDelete
    }))
  }
  const AddTask =()=>{
    const newTask ={
      taskName:task,
      deadLine:deadline,
    };
    setTodo([ ...todo ,newTask]);
    setTask('');
    setDeadline(0)
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" 
          name="task"
          value={task}
          onChange={handleChange}
          placeholder="Add to do List" 
          />
          <input type="number"
          name="deadline"  
          value={deadline}
          onChange={handleChange}
          placeholder="Set the deadline for the task" />
        </div>
          <button onClick={AddTask}>Add</button>
      </div>
        <div className="todoList">
          {todo.map((task:ITask,key:number)=>
              <TodoTask key={key} task={task} completeTask={completeTask} />
            )
          }
        </div>
    </div>
  )
}

export default App;