import TodoItem from "./todoItem.tsx";
import type {todoItemProps} from "./todo.tsx";


interface todoListProps {
    todoList: todoItemProps[]
    changeTodoItem: (id: number) => void
    deleteTodoItem: (id: number) => void
}

const TodoList = (props: todoListProps) => {
    const TodoItems = props.todoList.map(todoItem => <TodoItem key={todoItem.id} item={todoItem}
                                                               changeTodoItem={props.changeTodoItem}
                                                               deleteTodoItem={props.deleteTodoItem}></TodoItem>)
    return (
        <div>
            {TodoItems}
        </div>
    )
}

export default TodoList
