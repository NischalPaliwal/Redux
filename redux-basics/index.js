import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk'; 

const initialAmountState = { amount: 0 };
const initialBonusState = { bonus: 0 };

// Action Name Constants
const init = 'init';
const Increment = 'increment';
const Decrement = 'decrement';
const IncrementByAmount = 'incrementByAmount';
const incBonus = 'incBonus';
const decBonus = 'decBonus'; 
const incByAmt = 'incByAmt';

const accountReducer = (state = initialAmountState, action) => {
    switch (action.type) {
        case init:
            return { ...state, amount: action.payload };
        case Increment:
            return { ...state, amount: state.amount + 1 };
        case Decrement:
            return { ...state, amount: state.amount - 1 };
        case IncrementByAmount:
            return { ...state, amount: state.amount + action.payload };
        default:
            return state;
    }
};

const bonusReducer = (state = initialBonusState, action) => {
    switch (action.type) {
        case incBonus:
            return { bonus: state.bonus + 1 };
        case decBonus:
            return { bonus: state.bonus - 1 };
        case incByAmt:
            if (action.payload >= 100) {
                return { bonus: state.bonus + 1 };
            }
            return state; 
        default:
            return state;
    }
};

const store = createStore(combineReducers({ account: accountReducer, bonus: bonusReducer }), applyMiddleware(thunk));

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

// Action Creators
function actionCreator(value) {
    return { type: init, payload: value };
}

function increment() {
    return { type: Increment };
}

function decrement() {
    return { type: Decrement };
}

function incrementByAmount(value) {
    return { type: IncrementByAmount, payload: value };
}

function incrementBonus() { 
    return { type: incBonus };
}

function decrementBonus() { 
    return { type: decBonus };
}

function incrementBonusByAmount(value) { 
    return { type: incByAmt, payload: value };
}

setInterval(() => {
    store.dispatch(incrementBonus());
}, 2000);