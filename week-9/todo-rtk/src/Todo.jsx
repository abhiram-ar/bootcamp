import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./redux/features/todos";
const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div key={todo.id} className="flex gap-1">
            <h1>{todo.title}</h1>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                    dispatch(
                        toggleComplete({
                            id: todo.id,
                            completed: todo.completed,
                        })
                    )
                }
            />
            <button onClick={()=> {
                dispatch(deleteTodo({id:todo.id}))
            }}>Delete</button>
        </div>
    );
};

export default Todo;
