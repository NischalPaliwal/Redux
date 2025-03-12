import { createStore } from "redux";

const initialState = { amount: 1 };

// Action Name Constants ->
const init = 'init';
const Increment = 'increment';
const Decrement = 'decrement';
const IncrementByAmount = 'incrementByAmount';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case init:
            return { ...state, amount: action.payload }
        case Increment:
            return { ...state, amount: state.amount + 1 };
        case Decrement:
            return { ...state, amount: state.amount - 1 };
        case IncrementByAmount:
            return { ...state, amount: state.amount + (action.payload || 0) }; // Ensure payload is defined
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

// Action Creators ->
function actionCreator(value) {
    return { type: init, payload: value }
}

function increment() {
    return { type: Increment }
}

function decrement() {
    return { type: Decrement }
}

function incrementByAmount(value) {
    return { type: IncrementByAmount, payload: value }
}

setInterval(() => {
    store.dispatch(incrementByAmount(4));
}, 2000);