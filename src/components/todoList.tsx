import TodoItem from "./todoItem.tsx";
import type {todoItemProps} from "./todo.tsx";


interface todoListProps {
    todoList: todoItemProps[]
    changeTodoItem: (id: number) => void
    deleteTodoItem: (id: number) => void
}

const TodoList = ({todoList, changeTodoItem, deleteTodoItem}: todoListProps) => {
    const WorkItems = todoList.filter(item => item.category === "1").map(todoItem => {
        return <TodoItem key={todoItem.id} item={todoItem}
                         changeTodoItem={changeTodoItem}
                         deleteTodoItem={deleteTodoItem}></TodoItem>
    })
    const StudyItems = todoList.filter(item => item.category === "2").map(todoItem => {
        return <TodoItem key={todoItem.id} item={todoItem}
                         changeTodoItem={changeTodoItem}
                         deleteTodoItem={deleteTodoItem}></TodoItem>
    })
    const LifeItems = todoList.filter(item => item.category === "3").map(todoItem => {
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
