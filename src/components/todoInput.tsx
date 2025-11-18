import type {todoItemProps} from "./todo.tsx";
import {useState} from "react";
import * as React from "react";

interface todoInputProps {
    addTodoItem: (todoItem: todoItemProps) => void
}

const TodoInput = ({addTodoItem}: todoInputProps) => {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const changeValue = (e: React.ChangeEvent) => {
        setTitle((e.target as HTMLInputElement).value)
    }
    const changeCategory = (e: React.ChangeEvent) => {
        setCategory((e.target as HTMLSelectElement).value)
    }
    const changeDescription = (e: React.ChangeEvent) => {
        setDescription((e.target as HTMLTextAreaElement).value)
    }
    const addHandleInput = (e: React.FormEvent) => {
        e.preventDefault();
        addTodoItem({
            id: new Date().getTime(),
            title: title,
            category: category,
            description: description,
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
                <select
                    onChange={changeCategory}
                    style={{
                    width: "100%",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    border: "0.5px solid gray"
                }}>
                    <option value="" disabled hidden>Category</option>
                    <option value="1">work</option>
                    <option value="2">study</option>
                    <option value="3">Life</option>
                </select>
                <textarea placeholder={"Description"}  onChange={changeDescription} value={description} style={{
                    width: "100%",
                    height: "100px",
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    border: "0.5px solid gray"
                }}></textarea>
            </form>
        </div>
    )
}

export default TodoInput
