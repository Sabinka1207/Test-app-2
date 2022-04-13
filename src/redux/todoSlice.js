import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTasks: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { updateTasks } = todoSlice.actions;

export default todoSlice.reducer;
