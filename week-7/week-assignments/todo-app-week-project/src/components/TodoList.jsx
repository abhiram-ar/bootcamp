import { Fragment, useEffect, useState } from "react";
import Todo from "./Todo";
import { AddTodo } from "./AddTodo";

import EditTodo from "./EditTodo";

function TodoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [newTask, setNewTask] = useState("");
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingTodoText, setEditingTodoText] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function addTask(e) {
        e.preventDefault();

        let task = newTask.trim();
        if (!task.trim()) return null;

        setTodos([
            ...todos,
            {
                id: Date.now(),
                text: task,
                completed: false,
            },
        ]);

        setNewTask("");
    }

    function handleDelete(id) {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    function startEdit(id, text) {
        setEditingTodoId(id);
        setEditingTodoText(text);
    }

    function saveEdit() {
        console.log(`saved`);
        if (editingTodoText.trim() === "" ) return;

        setTodos(
            todos.map((todo) => {
                if (todo.id === editingTodoId)
                    return { ...todo, text: editingTodoText };
                return todo;
            })
        );

        setEditingTodoId(null);
        setEditingTodoText("");
    }

    function cancelEdit() {
        setEditingTodoId(null);
        setEditingTodoText("");
    }

    function handleToggle(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id)
                    return { ...todo, completed: !todo.completed };
                return todo;
            })
        );
    }

    return (
        <div className="max-w-md my-10 mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1
                className="text-center text-3xl font-bold my-4 text-gray-800"
                style={{ fontFamily: "cursive" }}
            >
                TODO LIST
            </h1>

            <AddTodo
                addTask={addTask}
                newTask={newTask}
                setNewTask={setNewTask}
                editingTodoId={editingTodoId}
            />

            {todos.map((todo) => (
                <Fragment key={todo.id}>
                    {todo.id === editingTodoId ? (
                        <EditTodo
                            todo={todo}
                            editingTodoText={editingTodoText}
                            setEditingTodoText={setEditingTodoText}
                            cancelEdit={cancelEdit}
                            saveEdit={saveEdit}
                        />
                    ) : (
                        <Todo
                            todo={todo}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                            startEdit={startEdit}
                        />
                    )}
                </Fragment>
            ))}

            {todos.length === 0 && (
                <p className="text-center text-grey-500 mt-4">
                    Yayy! no task pending🌻
                </p>
            )}
        </div>
    );
}

export default TodoList;
