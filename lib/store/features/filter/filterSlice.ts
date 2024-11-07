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
        priorityQuery: ITask['priority'] | '';
      }>
    ) => {
      const { tasks, searchQuery, priorityQuery } = action.payload;

      if (!searchQuery && !priorityQuery) {
        state.filteredTasks = tasks;
        return;
      }

      state.filteredTasks = tasks.filter((task) => {
        const filteredBySearch = task.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        const filteredByPriority = priorityQuery
          ? task.priority === priorityQuery
          : true;

        return filteredBySearch && filteredByPriority;
      });
    },
  },
});

export const { setFilteredTasks } = filterSlice.actions;
export default filterSlice.reducer;
