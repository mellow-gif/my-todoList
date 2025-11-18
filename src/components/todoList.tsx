import TodoItem from "./todoItem.tsx";
import type {todoItemProps} from "./todo.tsx";



interface todoListProps {
    todoList: todoItemProps[]
    changeTodoItem: (id: number) => void
    deleteTodoItem: (id: number) => void
}

const TodoList = ({todoList, changeTodoItem, deleteTodoItem}: todoListProps) => {
    const todoListSorted = [...todoList].sort((a, b) => {
        // 转换为时间戳（毫秒数），直接相减比较
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    const WorkItems = todoListSorted.filter(item => item.category === "1").map(todoItem => {
        return <TodoItem key={todoItem.id} item={todoItem}
                         changeTodoItem={changeTodoItem}
                         deleteTodoItem={deleteTodoItem}></TodoItem>
    })
    const StudyItems = todoListSorted.filter(item => item.category === "2").map(todoItem => {
        return <TodoItem key={todoItem.id} item={todoItem}
                         changeTodoItem={changeTodoItem}
                         deleteTodoItem={deleteTodoItem}></TodoItem>
    })
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
