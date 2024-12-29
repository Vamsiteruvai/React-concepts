import { createStore } from "redux";

const initialization = {
    balance: 0,
    fullname: "",
    mobile: null
};

function accountReducer(state = initialization, action) {
    switch (action.type) {
        case "deposite":
            return { ...state, balance: state.balance + action.payload };
            break;
        case "fullname":
            return { ...state, fullname:action.payload };
            break;
        case "mobile":
            return { ...state, mobile:action.payload };
            break;
        default:
            return state;
    }
}

const store = createStore(accountReducer);
//console.log(store)

//console.log(store.getState())
// store.dispatch({ type: "deposite", payload: 100 })
// store.dispatch({ type: "fullname", payload: "vamsi" })
// store.dispatch({ type: "mobile", payload: 99655583840 })
store.dispatch({type:"withdraw",payload:152})
console.log(store.getState())