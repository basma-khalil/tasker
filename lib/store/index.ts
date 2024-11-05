import { configureStore } from '@reduxjs/toolkit';
// Reducers
import taskReducer from '@/lib/store/features/task/taskSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      task: taskReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
