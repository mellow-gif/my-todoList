
import type {todoItemProps} from "./todo.tsx";

/**
 * 定义TodoItem组件的属性接口
 */
interface itemProps {
    /**
     * 待办事项数据对象
     */
    item: todoItemProps
    /**
     * 修改待办事项状态的回调函数
     * @param id - 待办事项的唯一标识符
     */
    changeTodoItem: (id: number) => void
    /**
     * 删除待办事项的回调函数
     * @param id - 待办事项的唯一标识符
     */
    deleteTodoItem: (id: number) => void
}

/**
 * TodoItem组件用于展示单个待办事项，并提供完成/取消完成以及删除功能
 * @param props - 组件属性对象
 * @param props.item - 待办事项数据
 * @param props.changeTodoItem - 切换待办事项完成状态的回调函数
 * @param props.deleteTodoItem - 删除待办事项的回调函数
 * @returns JSX元素，表示一个待办事项项
 */
const TodoItem = ({item, changeTodoItem,deleteTodoItem}: itemProps) => {
    /**
     * 切换当前待办事项的完成状态
     */
    const changeChecked = () => {
        changeTodoItem(item.id)
    }

    /**
     * 删除当前待办事项
     */
    const deleteTodo = () => {
        deleteTodoItem(item.id)
    }

    // 根据待办事项是否完成来设置样式：已完成的项目背景为灰色，未完成为白色
    return (
        <div style={{backgroundColor: item.isFinished ? "#ddd" : "#fff", borderRadius: "10px", width: "100%", margin: "5px",padding: "5px"}}>
            <div style={{position: "relative"}}>
                {/* 复选框用于切换待办事项的完成状态 */}
                <input type={"checkbox"} checked={item.isFinished} onChange={changeChecked} style={{margin: "10px",marginRight: "5px"}}></input>
                {/* 标题文本，根据完成状态显示删除线和颜色变化 */}
                <span style={{
                    textDecoration: item.isFinished ? "line-through" : "none",
                    color: item.isFinished ? "#888" : "#000",
                    margin: "10px",
                    marginLeft: "5px",
                    marginRight: "0px",
                }}>{item.title}</span>
                {/* 描述文本，根据完成状态显示删除线和颜色变化 */}
                <span style={{
                    margin: "10px",
                    marginLeft: "5px",
                    marginRight: "0px",
                    textDecoration: item.isFinished ? "line-through" : "none",
                    color: item.isFinished ? "#888" : "#000",
                }}>{item.description}</span>
                {/* 日期信息，根据完成状态显示删除线和颜色变化 */}
                <span style={{
                    margin: "10px",
                    marginLeft: "5px",
                    marginRight: "0px",
                    textDecoration: item.isFinished ? "line-through" : "none",
                    color: item.isFinished ? "#888" : "#000",
                }}>{item.date}</span>
                {/* 删除按钮，绝对定位在右侧 */}
                <button
                    onClick={deleteTodo}
                    style={{
                    color: "gray",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px",
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
