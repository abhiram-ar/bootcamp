export function AddTodo({addTask, newTask, setNewTask, editingTodoId}){
    return (
        <>
            <form onSubmit={addTask} className="flex gap-2 mb-4">
                <input
                    name="addTaskInput"
                    type="text"
                    placeholder="task...."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={editingTodoId ? true : false}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Task
                </button>
            </form>
        </>
    );
}