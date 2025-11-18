import TodoInput from "./todoInput.tsx";
import TodoList from "./todoList.tsx";
import {useEffect, useState} from "react";

export interface todoItemProps {
    id: number,
    title: string,
    category: string,
    description: string,
    date: string,
    isFinished: boolean,
}


const Todo = () => {

    const [todoList, setTodoList] = useState<todoItemProps[]>(() => {
        const savedTodoList = localStorage.getItem("todoList");
        if (savedTodoList) {
            try {
                return JSON.parse(savedTodoList);
            } catch (e) {
                console.error("Failed to parse todoList from localStorage", e);
                return [];
            }
        }
        return [];
    });

    const num = todoList.length
    const changeTodoItem = (id: number) => {
        const newTodoList = todoList.map(item => {
            if (item.id === id) {
                return Object.assign({}, item, {
                    isFinished: !item.isFinished
                })
            }
            return item
        })
        setTodoList(newTodoList)
    }

    const addTodoItem = (todoItem: todoItemProps) => {
        setTodoList([...todoList, todoItem])
    }

    const deleteTodoItem = (id: number) => {
        const newTodoList = todoList.filter(item => item.id !== id)
        setTodoList(newTodoList)
    }


    useEffect( ()=>{
        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList])

    return (
        <div style={{width: "50%"}}>
            <div style={{marginLeft: "20px",marginBottom: "10px"}}>
                <h1 style={{margin: "0px", padding: "0px"}}>Todos</h1>
                <h6 style={{margin: "0px", padding: "0px", color: "gray"}}>{num} items left</h6>
            </div>
            <TodoInput addTodoItem={addTodoItem}></TodoInput>
            <TodoList todoList={todoList} changeTodoItem={changeTodoItem} deleteTodoItem={deleteTodoItem}></TodoList>
        </div>
    )
}

export default Todo
