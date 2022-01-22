import { toDoListDTO } from '../DTOs/ToDoList.dto';


const ToDoListItems = ({todo, toggleComplete}: toDoListDTO) => {

    return (
        <li>
            <label className={todo.status? "todo-row completed" : "todo-row"}>
                <input type="checkbox" onChange={() => toggleComplete(todo)} checked={todo.status} />
                <div>
                    <div style={{fontWeight: "bold"}}>{todo.title}</div> 
                    <div>{todo.description}</div>   
                </div>
            </label>
            <div className="right"><div>{todo.created_at}</div></div>
        </li> 
    )
};

export {  ToDoListItems  };