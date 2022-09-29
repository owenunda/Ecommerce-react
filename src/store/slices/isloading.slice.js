import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {

    }
})

export const {  } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
