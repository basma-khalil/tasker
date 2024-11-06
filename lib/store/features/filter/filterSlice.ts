import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface filterState {
  filteredTasks: TTasks;
}

const initialState: filterState = {
  filteredTasks: [],
};

export const filterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFilteredTasks: (
      state,
      action: PayloadAction<{
        tasks: TTasks;
        searchQuery: string;
      }>
    ) => {
      const { tasks, searchQuery } = action.payload;

      if (!searchQuery) {
        state.filteredTasks = tasks;
        return;
      }

      state.filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
});

export const { setFilteredTasks } = filterSlice.actions;
export default filterSlice.reducer;
