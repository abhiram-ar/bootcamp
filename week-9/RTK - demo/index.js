const store = require("./app/store");
const { cakeAction } = require("./features/cake/cakeSlice");
const { icecreamAction } = require("./features/icecream/icecreamSlice");
const { fetchUsers } = require("./features/users/usersSlice");

console.log(`initial state `, store.getState());

//subcribe to changes in the store
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(3))

// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(2))
store.dispatch(fetchUsers());

// unsubscribe()
