import { useEffect, useState } from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoCard from "../../components/TodoCard/TodoCard";

function Todo() {
    const [todoList, setTodoList] = useState([]);
    function addTodo(todo) {
        const todoObj = {
            id: todoList.length + 1,
            title: todo,
            finished: false
        }
        setTodoList([...todoList, todoObj]);
    }
    function removeTodo(id) {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    }
    function reverseTodo(id) {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                todo.finished = !todo.finished;
            }
            return todo;
        });
        setTodoList(newTodoList);
    }

    useEffect(() => {
        console.log('TodoList updated:', todoList);
    }, [todoList]);
    
    return (
        <div className="App" style={{ marginTop: "10vh", backgroundColor: "#9090ff", width: "fit-content", maxWidth: "80vw", padding: "20px", borderRadius: "10px" }}>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <div style={{ maxHeight: "50vh", overflow: "scroll" }}>
                {todoList.length > 0 && todoList.map((todo) => {
                    return <TodoCard todo={todo} removeTodo={removeTodo} reverseTodo={reverseTodo}/>
                })}
            </div>
            
        </div>
    );
}

export default Todo