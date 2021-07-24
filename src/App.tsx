import React, {ChangeEvent, FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { ITask } from './interfaces';
import ToDoTask from './components/ToDoTask';

const App:FC =()=> {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setToDoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
if (event.target.name === 'task') {
  setTask(event.target.value)
}
else{
  setDeadline(Number(event.target.value))
}
  }

const addTask =()=> {
  const newTask = {taskName: task, deadline: deadline}
setToDoList([...todoList, newTask])
setTask('')
setDeadline(0)
console.log(todoList);
}

const completeTask = (taskNameToDelete: string): void =>{
setToDoList(todoList.filter((task) => {
  return task.taskName != taskNameToDelete
}))
}

  return (
    <div className="App">
      <div className="header">
<div className="inputContainer">
<input type="text" name="task" value={task} placeholder="Task..." onChange={handleChange} />
      <input type="number" name="deadline" value={deadline} onChange={handleChange} placeholder="Deadline (in days)..." />
</div>
      <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
{todoList.map((task : ITask, key: number)=> {
return <ToDoTask task={task} completeTask={completeTask} key ={key}></ToDoTask>
})}
      </div>
    </div>
  );
}

export default App;
