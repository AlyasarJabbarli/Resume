import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const MainReducer = createSlice({
    name : 'MAIN_SLICE',
    initialState : initialState,
    reducers:{
        changeStateValue: (state, action) => {
            console.log(action);
            state[action.payload.name] = action.payload.value
        }
    }
})

export const Data = MainReducer.reducer;
export const {changeStateValue} = MainReducer.actions;