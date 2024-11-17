const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");
const axios = require("axios");

//initialstate
const initialState = {
    loading: false,
    users: [],
    error: "",
};

//actions
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCESSFUL = "FETCH_USERS_SUCESSFUL";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//action creatrs
const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    };
};

const fetchUsersSucessful = (users) => {
    return {
        type: FETCH_USERS_SUCESSFUL,
        payload: users,
    };
};

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return { ...state, loading: true };
        case FETCH_USERS_SUCESSFUL:
            return { loading: false, users: action.payload, error: "" };
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
    }
};

//faction  creator with sideeffects
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequested());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const userData = response.data.map((user) => user.username);
                dispatch(fetchUsersSucessful(userData));
            })
            .catch((response) => {
                dispatch(fetchUsersFailed(response.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
