'use client';

// Core
import { Draggable } from '@hello-pangea/dnd';
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
  index: number;
}

export default function TaskCard({ task, index }: TaskCardProps) {
  const isOpen = useAppSelector((state) => state.taskDetails.openTaskModal);
  const dispatch = useAppDispatch();

  const handleOpenTaskDetails = () => {
    dispatch(setTask(task));
    dispatch(openTaskModal());
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <li
          className={`transition-opacity cursor-pointer hover:opacity-80 ${
            snapshot.isDragging && 'opacity-50'
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <div
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
          </div>
        </li>
      )}
    </Draggable>
  );
}
