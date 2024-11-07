import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TaskDetailsState {
  task: ITask | null;
  openTaskModal: boolean;
}

const initialState: TaskDetailsState = {
  task: null,
  openTaskModal: false,
};

export const taskDetailsSlice = createSlice({
  name: 'taskDetails',
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<ITask>) => {
      state.task = action.payload;
    },
    openTaskModal: (state) => {
      state.openTaskModal = true;
    },
    closeTaskModal: (state) => {
      state.openTaskModal = false;
    },
  },
});

export const { setTask, openTaskModal, closeTaskModal } = taskDetailsSlice.actions;
export default taskDetailsSlice.reducer;
