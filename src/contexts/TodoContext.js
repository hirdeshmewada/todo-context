import {createContext,useContext} from "react"

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo message",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})

export const useTodo=()=>{
    return useContext(TodoContext)  //use context ko context dena hota hain
}


export const TodoProvider=TodoContext.Provider