import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos";

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});
