import { ToDoListItems } from './ToDoList';
import { toDoListPropsDTO } from '../DTOs/ToDoList.dto';

const ToDoList = ({todos, toggleComplete}: toDoListPropsDTO ) => {

    return (
        <ul>
            {todos.map((todo, index) => <ToDoListItems 
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
            />) }
        </ul> 
    )
};
export { ToDoList  };