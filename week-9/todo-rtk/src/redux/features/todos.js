import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete:(state, action)=>{
            state.find(st => st.id === action.payload.id).completed = !action.payload.completed
        },
        deleteTodo: (state, action)=>{
            return state.filter(st => st.id !== action.payload.id)
        }

    },
});

export const { addTodo, toggleComplete, deleteTodo } = userSlice.actions;
export default userSlice.reducer;
