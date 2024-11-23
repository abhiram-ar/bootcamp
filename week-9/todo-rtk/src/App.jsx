import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { addTodo } from "./redux/features/todos";

function App() {
    const [newTodo, setNewTodo] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Total completed todos: {todos.filter(todo => todo.completed).length}</h2>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setNewTodo("")
                    dispatch(addTodo({ title: newTodo }));
                }}
            >
                <h2>Add todo</h2>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="bg-slate-300"
                />
            </form>
        </div>
    );
}

export default App;
