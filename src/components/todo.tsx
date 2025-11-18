
import TodoInput from "./todoInput.tsx";
import TodoList from "./todoList.tsx";
import {useEffect, useState} from "react";
import React from 'react';


export interface todoItemProps {
    id: number,
    title: string,
    category: string,
    description: string,
    date: string,
    isFinished: boolean,
}

/**
 * Todo组件：用于管理待办事项的主界面
 * 包含待办事项的增删改查、搜索以及本地存储功能
 */
const Todo = () => {

    /**
     * 初始化待办事项列表状态，从localStorage中读取数据
     * 如果解析失败则返回空数组
     */
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

    const [searchList , setSearchList] = useState<todoItemProps[]>(todoList)
    const [isSearching , setIsSearching] = useState(false)

    const num = todoList.length

    /**
     * 切换待办事项的完成状态
     * @param id 待办事项的唯一标识符
     */
    const changeTodoItem = (id: number) => {
        // 遍历待办事项列表，找到匹配的项并切换其完成状态
        const newTodoList = todoList.map(item => {
            if (item.id === id) {
                // 使用Object.assign创建新对象，避免直接修改原对象
                return Object.assign({}, item, {
                    isFinished: !item.isFinished
                })
            }
            return item
        })
        // 更新待办事项列表状态
        setTodoList(newTodoList)
    }

    /**
     * 添加新的待办事项到列表中
     * @param todoItem 新的待办事项对象
     */
    const addTodoItem = (todoItem: todoItemProps) => {
        setTodoList([...todoList, todoItem])
    }

    /**
     * 根据ID删除指定的待办事项
     * @param id 要删除的待办事项的唯一标识符
     */
    const deleteTodoItem = (id: number) => {
        const newTodoList = todoList.filter(item => item.id !== id)
        setTodoList(newTodoList)
    }

    /**
     * 根据标题搜索待办事项
     * @param e 输入框的change事件对象
     */
    const searchTodoItem = (e: React.ChangeEvent) => {
        const title = (e.target as HTMLInputElement).value
        if(title === ""){
            setIsSearching(false)
        }
        else{
            setIsSearching(true)
            const newTodoList = todoList.filter(item => item.title.includes(title))
            setSearchList(newTodoList)
        }
    }

    /**
     * 当待办事项列表发生变化时，将数据保存到localStorage中
     */
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList])

    return (
        <div style={{width: "50%"}}>
            <div style={{marginLeft: "20px", marginBottom: "10px"}}>
                <h1 style={{margin: "0px", padding: "0px"}}>Todos</h1>
                <h6 style={{margin: "0px", padding: "0px", color: "gray"}}>{num} items left</h6>
            </div>
            <TodoInput addTodoItem={addTodoItem}></TodoInput>
            <div style={{marginLeft: "10px", marginBottom: "10px"}}>
                <input type="text" placeholder="Search" style={{width: "100%",height: "30px"}}
                       onChange={searchTodoItem} />
            </div>
            <TodoList todoList= {isSearching ? searchList : todoList} changeTodoItem={changeTodoItem} deleteTodoItem={deleteTodoItem}></TodoList>
        </div>
    )
}

export default Todo
