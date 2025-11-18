
import TodoItem from "./todoItem.tsx";
import type {todoItemProps} from "./todo.tsx";



interface todoListProps {
    todoList: todoItemProps[]
    changeTodoItem: (id: number) => void
    deleteTodoItem: (id: number) => void
}

/**
 * TodoList组件用于展示和管理待办事项列表
 * @param todoList - 待办事项数组，包含所有待办事项的数据
 * @param changeTodoItem - 修改待办事项状态的回调函数，接收待办事项ID作为参数
 * @param deleteTodoItem - 删除待办事项的回调函数，接收待办事项ID作为参数
 * @returns 返回按分类和日期排序的待办事项列表 JSX 元素
 */
const TodoList = ({todoList, changeTodoItem, deleteTodoItem}: todoListProps) => {
    // 按日期升序排列待办事项
    const todoListSorted = [...todoList].sort((a, b) => {
        // 转换为时间戳（毫秒数），直接相减比较
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    // 筛选并渲染工作类别的待办事项
    const WorkItems = todoListSorted.filter(item => item.category === "1").map(todoItem => {
        return <TodoItem key={todoItem.id} item={todoItem}
                         changeTodoItem={changeTodoItem}
                         deleteTodoItem={deleteTodoItem}></TodoItem>
    })

    // 筛选并渲染学习类别的待办事项
    const StudyItems = todoListSorted.filter(item => item.category === "2").map(todoItem => {
        return <TodoItem key={todoItem.id} item={todoItem}
                         changeTodoItem={changeTodoItem}
                         deleteTodoItem={deleteTodoItem}></TodoItem>
    })

    // 筛选并渲染生活类别的待办事项
    const LifeItems = todoListSorted.filter(item => item.category === "3").map(todoItem => {
        return <TodoItem key={todoItem.id} item={todoItem}
                         changeTodoItem={changeTodoItem}
                         deleteTodoItem={deleteTodoItem}></TodoItem>
    })



    return (
        <div>
            <h4>Work</h4>
            {WorkItems}
            <h4>Study</h4>
            {StudyItems}
            <h4>Life</h4>
            {LifeItems}

        </div>
    )
}

export default TodoList

