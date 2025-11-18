import type {todoItemProps} from "./todo.tsx";
import {useState} from "react";
import * as React from "react";

interface todoInputProps {
    addTodoItem: (todoItem: todoItemProps) => void
}

const TodoInput = ({addTodoItem}: todoInputProps) => {

    const [title, setTitle] = useState("")
    const changeValue = (e: React.ChangeEvent) => {
        setTitle((e.target as HTMLInputElement).value)
    }
    const addHandleInput = (e: React.FormEvent) => {
        e.preventDefault();
        addTodoItem({
            id: new Date().getTime(),
            title: title,
            isFinished: false,
        })
    }


    return (
        <div style={{width: "100%"}}>
            <form onSubmit={addHandleInput} style={{padding: '0px'}}>
                <input placeholder={"Title"} onChange={changeValue} value={title} style={{
                    width: "100%",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    border: "0.5px solid gray"
                }}></input>
            </form>
        </div>
    )
}

export default TodoInput
