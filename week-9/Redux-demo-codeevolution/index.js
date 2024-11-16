const redux = require("redux");
const createStore = redux.createStore;

//good practice to store action in a variable
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

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

//state object
const initialState = {
    numerOfCakes: 10,
};

//reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return { ...state, numerOfCakes: state.numerOfCakes - 1 };

        case CAKE_RESTOCKED:
            return { ...state, numerOfCakes: state.numerOfCakes + 1 };

        default:
            return state;
    }
};

//create store takes a reducer function an argument
//since reducer takes a initail state, store is holding the application state
const store = createStore(reducer);
console.log("initail state", store.getState());

//subscribe to changes in store
// anytime the state updates, the callback fn in called
const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState());
});

//updating the state with dipatch
//dispatch takes action as argument
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(1))

//unsubsribing from store
unsubscribe();

//this wont call the cb because we have removed the listener
store.dispatch(orderCake());
