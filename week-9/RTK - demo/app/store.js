const {configureStore} = require("@reduxjs/toolkit")
const cakeReducer = require("./../features/cake/cakeSlice")
const icecreamReducer = require("./../features/icecream/icecreamSlice")
const usersReducer  = require("./../features/users/usersSlice")
const {createLogger} = require("redux-logger")

const logger = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: usersReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store