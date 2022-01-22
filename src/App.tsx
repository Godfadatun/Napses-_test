/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import {ToDoForm} from './components/ToDoForm'
import { ToDoList } from './components/ToDoListContainer';
import {toDoDTO} from './DTOs/App.dto'
// require('dotenv').config()
export const BASE_URL : string | undefined = `https://napsesbend.herokuapp.com/api`


function App() {
  const [toDos, setToDos] = useState<Array<toDoDTO>>([]);

  const addToDo = async ({title, description}: {[key: string]: string}) => {
    fetch({ filterType: 'all' }).then(response => {
      setToDos([...response]);
    }) 
    if (title) setToDos([...toDos, { title, description, status: false}]);
  };

  const toggleComplete = async  (selectedToDo: toDoDTO) => {
    const updatedToDo = await Promise.all(toDos.map(toDo => {
      if (toDo === selectedToDo) {
        let {id} = toDo as {id: number; status: boolean; created_at?: string; description: string; title: string;}
        updateTodo({id})  
        return {...toDo, status: !toDo.status}
      };
      return toDo;
    }))
    setToDos(updatedToDo);
  }

  const fetch = async ({ filterType = 'all' }: {filterType?: 'all' | 'completed' | 'in_progress'}) => {
    const createToDo = await axios.get(`${BASE_URL}/get-todo?completed=${filterType}`);
    return createToDo.data.data    
  };

  const updateTodo = async ({ id }: {id: number}) => {
    await axios.patch(`${BASE_URL}/complete-todo/${id}`);
  };

  useEffect(() => {
    fetch({ filterType: 'all' }).then(response => {
      setToDos([...response]);
    }) 
  }, []);
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>To-Do App</h1>
        <ToDoForm addToDo={addToDo} />
        <ToDoList todos={toDos} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
