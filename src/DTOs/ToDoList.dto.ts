import { toDoDTO } from "./App.dto";

export type toggleComplete = (selectedToDo: toDoDTO) => void;
// export type todoTime = (selectedToDo: toDoDTO) => void;
export interface toDoListDTO {
    todo: toDoDTO;
    toggleComplete: toggleComplete;     
}

export interface toDoListPropsDTO {
    todos: toDoDTO[];
    toggleComplete: toggleComplete;
}

