import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

import '../styles/task.css';


export const Task = ({ id, contenido, done, deleteTask, completedTask }) => {
  return (
      <div className={done ? "container-task container-task-done" : "container-task" }>
        <div className={done ? "text-task text-done" : "text-task"}>
          {contenido}
        </div>
        <div className='container-toggle'>
          <div 
            className='div-checkbox' 
            onClick={() => completedTask(id)}>
            <AiOutlineCheck  
              className={done ? "checkbox checkbox-done" : "checkbox"}   
            />
          </div>
            <AiOutlineCloseCircle 
              className={done ? "button-delete button-done" : "button-delete"}
              onClick={() => deleteTask(id)}
            />
          </div>
        </div> 
  );
}