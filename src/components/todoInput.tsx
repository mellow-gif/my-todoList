import type {todoItemProps} from "./todo.tsx";
import {useState} from "react";
import * as React from "react";

interface todoInputProps {
    addTodoItem: (todoItem:todoItemProps) => void
}

const TodoInput = ({addTodoItem}:todoInputProps) => {

    const [text,setText] = useState("")
    const changeValue = (e:React.ChangeEvent) => {
        setText((e.target as HTMLInputElement).value)
    }
    const addHandleInput = () =>{
        addTodoItem({
            id:new Date().getTime(),
            text:text,
            isFinished:false
        })
    }

    return (
        <div>
            <input placeholder={"输入事项"} onChange={changeValue} value={text}></input>
            <button onClick={addHandleInput}>添加</button>
        </div>
    )
}

export default TodoInput
