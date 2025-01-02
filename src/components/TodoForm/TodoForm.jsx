import { useState } from "react";
function TodoForm(props) {

    const { addTodo } = props;
    const [todo, setTodo] = useState('');

    function handleChange(e) {
        setTodo(e.target.value);
        console.log(e.target.value);
    }

    function handleAdd() {
        addTodo(todo);
        setTodo('');
    }

    return (
        <div className="d-flex justify-content-center align-items-center gap-1">
            <div class="input-group" style={{ width: "fit-content" }}>
                <span className="input-group-text" id="basic-addon1">Todo</span>
                <input type="text" value={todo} className="form-control" placeholder="Please type your todo" onChange={(e) => handleChange(e)} aria-label="Please type your todo" aria-describedby="basic-addon1"/>
            </div>
            <button className="btn btn-primary" onClick={() => handleAdd(todo)}>Add Todo</button>
        </div>
    );
}

export default TodoForm;