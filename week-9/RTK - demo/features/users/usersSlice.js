const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
    loading: false,
    users: [],
    error: "",
};

// generates pending, fulfilled, rejected action types
// we dont want to dispatch an event when the promise is fulfilled, as fulfilled promise is action type
// we dont want to handle the error as the rejected promise will be an action type
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.data.map((user) => user.name)); //action payload
});

const userslice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        // note : either edit the state without returning anything
        // or return the new state without updating the current state,
        // immer cant handle mutating the draft and returning new draft simultaniously
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    },
});

module.exports = userslice.reducer;
module.exports.fetchUsers = fetchUsers;
