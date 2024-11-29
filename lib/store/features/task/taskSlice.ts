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

    updateTaskState: (
      state,
      action: PayloadAction<{
        taskId: string;
        newState: ITask['state'];
        destIndex: number;
      }>
    ) => {
      const { taskId, newState, destIndex } = action.payload;

      // Find the task being moved
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) return;

      // Remove the task from its current list
      const [task] = state.tasks.splice(taskIndex, 1);

      // Update the task's state
      task.state = newState;

      // Filter tasks in the destination list
      const tasksInNewState = state.tasks.filter(
        (task) => task.state === newState
      );

      // Insert the task in the new position
      tasksInNewState.splice(destIndex, 0, task);

      // Rebuild the task list with updated tasks
      state.tasks = [
        ...state.tasks.filter((task) => task.state !== newState), // Other tasks
        ...tasksInNewState, // Updated destination list
      ];
    },

    reorderedTasks: (
      state,
      action: PayloadAction<{
        srcIndex: number;
        destIndex: number;
        listId: ITask['state'];
      }>
    ) => {
      const { srcIndex, destIndex, listId } = action.payload;

      // Filter tasks belonging to the current list
      const tasksInList = state.tasks.filter((task) => task.state === listId);

      // Remove the task being dragged
      const [draggableTask] = tasksInList.splice(srcIndex, 1);

      // Insert the task at the new index
      tasksInList.splice(destIndex, 0, draggableTask);

      // Rebuild the task list with reordered tasks
      state.tasks = [
        ...state.tasks.filter((task) => task.state !== listId), // Other tasks
        ...tasksInList, // Reordered tasks in this list
      ];
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  updateTaskState,
  reorderedTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
