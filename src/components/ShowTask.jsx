import { Task } from "./Task";
import { CreateTask } from './CreateTask';
import { useState, useEffect } from 'react';
import '../styles/show-task.css';


export const ShowTask = () => {

  const [listTask, setListTask] = useState([]);

  const createNewTask = (task) => {
    if(task.contenido.trim()) {
      setListTask([...listTask, task]);
    }
  }

  const completedTask = (id) => {
    const updateTask = listTask.map(task => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task;
    })
    setListTask(updateTask);
  }  

  const deleteTask = (id) => {
    const updateTask = listTask.filter(task => task.id !==  id)
    setListTask(updateTask);
  }

  
  useEffect(() => {  
    let data = localStorage.getItem('Tasks');
    if(data) {
      setListTask(JSON.parse(data));
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(listTask));
  }, [ listTask ])



  return (
    <div className="container">
      <h1>Mis Tareas</h1>
      <CreateTask  
        createNewTask={createNewTask}
      />
      {
        listTask.map(task => 
          <Task 
            key={task.id}
            id={task.id}
            contenido={task.contenido}
            done={task.done}
            completedTask={completedTask}
            deleteTask={deleteTask}
          />
        )
      }
    </div>
  );
}