import { Save, X } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function EditTodo({todo, editingTodoText, setEditingTodoText, cancelEdit, saveEdit}){
    return (
        <>
            <div
                // eslint-disable-next-line react/prop-types
                key={todo.id}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
            >
                <input
                    value={editingTodoText}
                    onChange={(e) => setEditingTodoText(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
                
                <button onClick={cancelEdit}>
                    <X className="w-4 h-4" />
                </button>
                <button onClick={saveEdit}>
                    <Save className="w-4 h-4" />
                </button>
            </div>
        </>
    );
}