import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react'
import { BASE_URL } from '../App';
import { addToDO } from '../DTOs/App.dto';


const ToDoForm = ({addToDo}: {addToDo: addToDO}) => {
    const [newToDo, setNewToDo] = useState<{[key: string]: string}>({
        text: "",
        description: ""
});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setNewToDo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const createToDo = await axios.post(`${BASE_URL}/create-todo`, newToDo)
        const { title: text , description } = createToDo.data.data
        
        addToDo({ description, text });
        setNewToDo({
            text: "",
            description: ""
        });
    }

    return (
        <form className="todo-form">
            <div className="todo-Div"><input name="text" type="" value={newToDo.text} className="todo-input" placeholder=" Add a todo" onChange={handleChange}/></div>
            <div className="todo-Div"><input name="description" type="" value={newToDo.description} className="todo-input" placeholder=" Describe" onChange={handleChange}/></div>
            
            <button type="submit" className="todo-button" onClick={handleSubmit}>Add to Do</button>
        </form>
    )
};

export {  ToDoForm  };