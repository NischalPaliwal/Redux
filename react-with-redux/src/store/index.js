import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

const initialAmountState = { amount: 0 };
const initialBonusState = { bonus: 0 };

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

export function actionCreator(value) {
    return { type: init, payload: value };
}

export function increment() {
    return { type: Increment };
}

export function decrement() {
    return { type: Decrement };
}

export function incrementByAmount(value) {
    return { type: IncrementByAmount, payload: value };
}

export function incrementBonus() { 
    return { type: incBonus };
}

export function decrementBonus() { 
    return { type: decBonus };
}

export function incrementBonusByAmount(value) { 
    return { type: incByAmt, payload: value };
}

export const store = createStore(combineReducers({ account: accountReducer, bonus: bonusReducer }), applyMiddleware(thunk));