function TodoCard(props) {

    const { todo, removeTodo, reverseTodo } = props;

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", padding: "10px", border: "1px solid black" }} key={todo.id}>
            <h4 style={{ textDecoration: todo.finished ? "line-through" : "none"}}>{todo.title}</h4>
            <div className="d-flex gap-1">
                <button onClick={() => reverseTodo(todo.id)} className="btn btn-success">{todo.finished ? "Undo" : "Done"}</button>
                <button onClick={() => removeTodo(todo.id)} className="btn btn-danger">X</button>
            </div>
        </div>
    );
}

export default TodoCard;