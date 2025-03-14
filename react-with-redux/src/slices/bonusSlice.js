import { createSlice } from "@reduxjs/toolkit";

const initialBonusState = { bonus: 0 };

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState: initialBonusState,
    reducers: {
        increment: (state) => {
            state.bonus += 1;
        },
        decrement: (state) => {
            state.bonus -= 1;
        },
        incrementByValue: (state, action) => {
            state.bonus += action.payload;
        }
    }
})

export const { increment, decrement, incrementByValue } = bonusSlice.actions;
export default bonusSlice.reducer;