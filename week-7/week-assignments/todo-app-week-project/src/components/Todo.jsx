/* eslint-disable react/prop-types */
import { Trash2, Edit } from "lucide-react";


function Todo({ todo, handleDelete, handleToggle, startEdit }) {
    return (
        <div
            key={todo.id}
            className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
        >
            <input
                type="checkbox"
                value={todo.completed}
                onChange={() => handleToggle(todo.id)}
            ></input>

            <span
                className={`flex-1 ${
                    todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                }`}
            >
                {todo.text}
            </span>

            
            <button onClick={() => startEdit(todo.id, todo.text)}>
                <Edit className="w-4 h-4" />
            </button>


            <button
                onClick={() => handleDelete(todo.id)}
                className="p-1 text-red-500 hover:bg-red-100 rounded"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
}

export default Todo;
