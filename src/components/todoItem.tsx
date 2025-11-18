import type {todoItemProps} from "./todo.tsx";

interface itemProps {
    item: todoItemProps
    changeTodoItem: (id: number) => void
    deleteTodoItem: (id: number) => void
}

const TodoItem = ({item, changeTodoItem,deleteTodoItem}: itemProps) => {
    const changeChecked = () => {
        changeTodoItem(item.id)
    }

    const deleteTodo = () => {
        deleteTodoItem(item.id)
    }

    return (
        <div style={{backgroundColor: item.isFinished ? "#ddd" : "#fff", borderRadius: "10px", width: "100%", margin: "5px",padding: "5px"}}>
            <div style={{position: "relative"}}>
                <input type={"checkbox"} checked={item.isFinished} onChange={changeChecked} style={{margin: "10px",marginRight: "5px"}}></input>
                <span style={{
                    textDecoration: item.isFinished ? "line-through" : "none",
                    color: item.isFinished ? "#888" : "#000",
                    margin: "10px",
                    marginLeft: "5px",
                    marginRight: "0px",
                }}>{item.title}</span>
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
