import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/create-task.css';


export const CreateTask = ({ createNewTask }) => {

  const [task, setTask ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask('');
    const newTask = {
      id: uuidv4(),
      contenido: task,
      done: false
    }
    createNewTask(newTask);
  }


  return (
    <form onSubmit={handleSubmit} className="form-task">
      <input 
        onChange={(e) => setTask(e.target.value)}
        type="text"
        value={task}
        placeholder="Ingrese una tarea nueva" 
        className="input-task" 
      />
      <button className="button-create-task">
        Crear Tarea
      </button>
    </form>
  );
}