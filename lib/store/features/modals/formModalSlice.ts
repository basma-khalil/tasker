import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface formModalState {
  defaultValues: ITask;
  updateTask: boolean;
  withState: ITask['state'];
  openFormModal: boolean;
}

const initialState: formModalState = {
  defaultValues: {
    id: '',
    date: '',
    title: '',
    description: '',
    priority: 'medium',
    state: 'todo',
    image: '',
  },
  updateTask: false,
  withState: 'todo',
  openFormModal: false,
};

export const formModalSlice = createSlice({
  name: 'formModal',
  initialState,
  reducers: {
    // Use set initial values only for edit task
    setDefaultValues: (state, action: PayloadAction<ITask>) => {
      state.defaultValues = action.payload;
    },
    setUpdateTask: (state, action: PayloadAction<boolean>) => {
      state.updateTask = action.payload;
    },
    setWithState: (state, action: PayloadAction<ITask['state']>) => {
      state.withState = action.payload;
    },
    openFormModal: (state) => {
      state.openFormModal = true;
    },
    closeFormModal: (state) => {
      state.openFormModal = false;
      state.updateTask = false;
      state.withState = 'todo';
    },
  },
});

export const {
  setDefaultValues,
  setUpdateTask,
  setWithState,
  openFormModal,
  closeFormModal,
} = formModalSlice.actions;
export default formModalSlice.reducer;
