import { configureStore } from "@reduxjs/toolkit";
import cakeReducer  from "./../features/cake/cakeSlice";
import icecreamReducer from "./../features/icecream/icecreamSlice";
import usersReducer from "./../features/users/usersSlice";


// const {createLogger} = require("redux-logger")
//const logger = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: usersReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
