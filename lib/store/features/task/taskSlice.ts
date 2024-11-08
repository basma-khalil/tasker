import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import { devTasks } from '@/data/tasks';

interface TaskState {
  tasks: TTasks;
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // updateTaskState: (
    //   state,
    //   action: PayloadAction<{ taskId: string; newState: ITask['state'] }>
    // ) => {
    //   const { taskId, newState } = action.payload;
    //   const task = state.tasks.find((task) => task.id === taskId);
    //   if (task) {
    //     task.state = newState;
    //   }
    // },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
