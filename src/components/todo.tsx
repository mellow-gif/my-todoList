import TodoInput from "./todoInput.tsx";
import TodoList from "./todoList.tsx";
import {useState} from "react";

export interface todoItemProps {
    id: number,
    text: string,
    isFinished: boolean,
}


const Todo = () => {

    const [todoList, setTodoList] = useState<todoItemProps[]>([])
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

    return (
        <div>
            <TodoInput addTodoItem={addTodoItem}></TodoInput>
            <TodoList todoList={todoList} changeTodoItem={changeTodoItem}></TodoList>
        </div>
    )
}

export default Todo
