'use client';

// Core
import {
  openTaskModal,
  setTask,
} from '@/lib/store/features/modals/taskDetailsSlice';
// Hooks
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
// Component
import Task from '@/components/board/components/task';

interface TaskCardProps {
  task: ITask;
}

export default function TaskCard({ task }: TaskCardProps) {
  const isOpen = useAppSelector((state) => state.taskDetails.openTaskModal);
  const dispatch = useAppDispatch();

  const handleOpenTaskDetails = () => {
    dispatch(setTask(task));
    dispatch(openTaskModal());
  };

  return (
    <li
      className="transition-opacity cursor-pointer hover:opacity-80"
      onClick={handleOpenTaskDetails}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleOpenTaskDetails();
        }
      }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls="task-details"
    >
      <Task task={task} isModal={false} />
    </li>
  );
}
