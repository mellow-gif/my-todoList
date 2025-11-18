
import type {todoItemProps} from "./todo.tsx";
import {useState} from "react";
import * as React from "react";

interface todoInputProps {
    addTodoItem: (todoItem: todoItemProps) => void
}

const TodoInput = ({addTodoItem}: todoInputProps) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("1")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("2000-1-1")
    // 添加错误状态
    const [errors, setErrors] = useState<{title?: string, category?: string, description?: string, date?: string}>({})

    const changeValue = (e: React.ChangeEvent) => {
        setTitle((e.target as HTMLInputElement).value)
        // 清除对应字段的错误信息
        if (errors.title) {
            setErrors(prev => ({...prev, title: undefined}))
        }
    }

    const changeCategory = (e: React.ChangeEvent) => {
        setCategory((e.target as HTMLSelectElement).value)
        if (errors.category) {
            setErrors(prev => ({...prev, category: undefined}))
        }
    }

    const changeDescription = (e: React.ChangeEvent) => {
        setDescription((e.target as HTMLTextAreaElement).value)
        if (errors.description) {
            setErrors(prev => ({...prev, description: undefined}))
        }
    }

    const changeDate = (e: React.ChangeEvent) => {
        setDate((e.target as HTMLInputElement).value)
        if (errors.date) {
            setErrors(prev => ({...prev, date: undefined}))
        }
    }

    const validateForm = () => {
        const newErrors: {title?: string, category?: string, description?: string, date?: string} = {};

        if (!title.trim()) {
            newErrors.title = "Title is required";
        }

        if (!category) {
            newErrors.category = "Category is required";
        }

        if (!description.trim()) {
            newErrors.description = "Description is required";
        }

        if (!date || date === "2000-1-1") {
            newErrors.date = "Date is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const addHandleInput = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // 验证失败，不继续执行
        }

        addTodoItem({
            id: new Date().getTime(),
            title: title,
            category: category,
            description: description,
            date: date,
            isFinished: false,
        })

        // 重置表单
        setTitle("")
        setCategory("1")
        setDescription("")
        setDate("2000-1-1")
    }

    return (
        <div style={{width: "100%"}}>
            <form onSubmit={addHandleInput} style={{padding: '0px'}}>
                <input
                    placeholder={"Title"}
                    onChange={changeValue}
                    value={title}
                    style={{
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        border: errors.title ? "2px solid red" : "0.5px solid gray"
                    }}
                />
                {errors.title && <div style={{color: 'red', marginLeft: '10px'}}>{errors.title}</div>}

                <select
                    value={category}
                    onChange={changeCategory}
                    style={{
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        border: errors.category ? "2px solid red" : "0.5px solid gray"
                    }}>
                    <option value="" disabled hidden>Category</option>
                    <option value="1">work</option>
                    <option value="2">study</option>
                    <option value="3">Life</option>
                </select>
                {errors.category && <div style={{color: 'red', marginLeft: '10px'}}>{errors.category}</div>}

                <textarea
                    placeholder={"Description"}
                    onChange={changeDescription}
                    value={description}
                    style={{
                        width: "100%",
                        height: "100px",
                        margin: "10px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        border: errors.description ? "2px solid red" : "0.5px solid gray"
                    }}
                />
                {errors.description && <div style={{color: 'red', marginLeft: '10px'}}>{errors.description}</div>}

                <label style={{marginLeft: "10px", marginTop: "10px"}}>Due Date: </label>
                <input
                    type={"date"}
                    style={{
                        marginLeft: "10px",
                        marginBottom: "10px",
                        border: errors.date ? "2px solid red" : "0.5px solid gray"
                    }}
                    onChange={changeDate}
                    value={date}
                />
                {errors.date && <div style={{color: 'red', marginLeft: '10px'}}>{errors.date}</div>}

                <button type={"submit"} style={{
                    width: "100%",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    border: "0.5px solid gray"
                }}>Add</button>
            </form>
        </div>
    )
}

export default TodoInput
