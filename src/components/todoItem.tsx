import type {todoItemProps} from "./todo.tsx";
interface itemProps {
    item:todoItemProps
    changeTodoItem:(id:number)=>void
}
const TodoItem = ({item,changeTodoItem}:itemProps) => {
    const changeChecked = () => {
        changeTodoItem(item.id)
    }
    return (
        <div>
            <input type={"checkbox"} checked={item.isFinished} onChange={changeChecked} ></input>
            <span>{item.text}</span>
        </div>
    )
}

export default TodoItem
