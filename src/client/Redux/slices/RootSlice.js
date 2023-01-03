import {createSlice} from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name"
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseName} = rootSlice.actions;