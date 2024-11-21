const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    numberOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered : (state) => {
            // 1. we dont want to return the new state
            // 2. createSlice under-the-hood uses immer libray to manage the state updation, 
            //    so we mutate the state directly 
            state.numberOfCakes--
        },
        restocked: (state, action)=>{
            state.numberOfCakes += action.payload
        }
    }
});


//default export
module.exports = cakeSlice.reducer

//named export
module.exports.cakeAction = cakeSlice.actions