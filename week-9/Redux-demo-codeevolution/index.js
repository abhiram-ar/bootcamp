const redux = require("redux");
const createStore = redux.createStore;
const combineRecuver = redux.combineReducers;
const { applyMiddleware } = redux;

const reduxLogger = require("redux-logger")
const constlogger = reduxLogger.createLogger()

//good practice to store action in a variable
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//action creator - is a function that returns an action
function orderCake() {
    //action object
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
}

function restockCake(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity,
    };
}

//actionsCreator for icecreams
function orderIcecreams(qty = 1) {
    return { type: ICECREAM_ORDERED, payload: qty };
}
function restockIcecreams(qty = 1) {
    return { type: ICECREAM_RESTOCKED, payload: qty };
}

//state object
const initialCakeState = {
    numerOfCakes: 10,
};

const initialIcecreamState = {
    numberOfIcecreams: 20,
};

//reducer function
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return { ...state, numerOfCakes: state.numerOfCakes - 1 };

        case CAKE_RESTOCKED:
            return { ...state, numerOfCakes: state.numerOfCakes + 1 };

        default:
            return state;
    }
};
const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - action.payload,
            };

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams + action.payload,
            };
        default:
            return state;
    }
};

//combinng multipleReducers
//it is convention to call the combined reducer as "rootReducer"
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

//create store takes a reducer function an argument
//since reducer takes a initail state, store is holding the application state
const store = createStore(rootReducer, applyMiddleware(reduxLogger.logger));
console.log("initail state", store.getState());

//subscribe to changes in store
// anytime the state updates, the callback fn in called
const unsubscribe = store.subscribe(() => {
    // removing since redux logger does the same task
    //console.log("updated state", store.getState());
});

//updating the state with dipatch
//dispatch takes action as argument
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(1));

store.dispatch(orderIcecreams());
store.dispatch(orderIcecreams(3));
store.dispatch(restockIcecreams(4));

//unsubsribing from store
unsubscribe();

//this wont call the cb because we have removed the listener
store.dispatch(orderCake());
