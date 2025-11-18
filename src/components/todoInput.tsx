import type {todoItemProps} from "./todo.tsx";
import {useState} from "react";
import * as React from "react";

/**
 * 定义TodoInput组件的属性接口
 * @property addTodoItem - 添加待办事项的回调函数，接收一个todoItemProps对象作为参数
 */
interface todoInputProps {
    addTodoItem: (todoItem: todoItemProps) => void
}

/**
 * TodoInput组件用于添加新的待办事项
 * 提供表单输入界面，包括标题、分类、描述和截止日期的输入
 * @param props - 组件属性对象
 * @param props.addTodoItem - 用于向父组件传递新创建的待办事项的回调函数
 * @returns 返回包含表单元素的JSX元素
 */
const TodoInput = ({addTodoItem}: todoInputProps) => {

    // 初始化表单状态
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("1")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("2000-1-1")

    /**
     * 处理标题输入框值变化的事件处理器
     * @param e - 输入框变更事件对象
     */
    const changeValue = (e: React.ChangeEvent) => {
        setTitle((e.target as HTMLInputElement).value)
    }

    /**
     * 处理分类选择框值变化的事件处理器
     * @param e - 选择框变更事件对象
     */
    const changeCategory = (e: React.ChangeEvent) => {
        setCategory((e.target as HTMLSelectElement).value)
    }

    /**
     * 处理描述文本域值变化的事件处理器
     * @param e - 文本域变更事件对象
     */
    const changeDescription = (e: React.ChangeEvent) => {
        setDescription((e.target as HTMLTextAreaElement).value)
    }

    /**
     * 处理日期输入框值变化的事件处理器
     * @param e - 日期输入框变更事件对象
     */
    const changeDate = (e: React.ChangeEvent) => {
        setDate((e.target as HTMLInputElement).value)
    }

    /**
     * 处理表单提交事件，创建新的待办事项并调用父组件的添加函数
     * @param e - 表单提交事件对象
     */
    const addHandleInput = (e: React.FormEvent) => {
        e.preventDefault();
        addTodoItem({
            id: new Date().getTime(),
            title: title,
            category: category,
            description: description,
            date: date,
            isFinished: false,
        })
    }

    // 渲染表单界面，包括标题输入框、分类选择器、描述文本域、日期选择器和添加按钮
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
                    value={category}
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
                <label style={{marginLeft: "10px", marginTop: "10px"}}>Due Date: </label>
                <input type={"date"} style={ {marginLeft: "10px", marginBottom: "10px"}} onChange={changeDate} value={date}/>
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
