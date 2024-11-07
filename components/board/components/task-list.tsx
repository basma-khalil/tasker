'use client';

// Core
import {
  openFormModal,
  setWithState,
} from '@/lib/store/features/modals/formModalSlice';
// Hooks
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
// Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import TaskCard from '@/components/board/components/task-card';
// Icons
import { Plus } from 'lucide-react';
import List from '@/assets/icons/list.svg';
import Hourglass from '@/assets/icons/hourglass.svg';
import Check from '@/assets/icons/check.svg';

// Types
interface TaskListProps {
  currentTasks: TTasks;
  listId: IList['id'];
  listTitle: string;
}

export default function TaskList({
  currentTasks,
  listId,
  listTitle,
}: TaskListProps) {
  const isOpen = useAppSelector((state) => state.formModal.openFormModal);
  const dispatch = useAppDispatch();

  const tasksInList = currentTasks.filter((task) => task.state === listId);

  const handleOpenTaskForm = () => {
    dispatch(setWithState(listId));
    dispatch(openFormModal());
  };

  return (
    <li className="w-full lg:w-[28%]">
      <Card className="border-none shadow-none">
        <CardHeader
          className={
            'flex-row justify-between items-center mb-6 py-4 text-listHeading bg-listBackground border rounded-xl shadow'
          }
        >
          <CardTitle className="capitalize flex items-center gap-2">
            {listId === 'todo' ? (
              <List fill="currentColor" width={16} height={16} />
            ) : listId === 'doing' ? (
              <Hourglass fill="currentColor" width={16} height={16} />
            ) : (
              <Check fill="currentColor" width={18} height={18} />
            )}
            {listTitle}
          </CardTitle>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="!mt-0 transition hover:opacity-70"
                onClick={handleOpenTaskForm}
                aria-label="add new task"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                aria-controls="task-form"
                data-state={listId}
              >
                <Plus />
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">add new task</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>

        {tasksInList.length !== 0 && (
          <CardContent className="max-h-[500px] pt-6 bg-listBackground border rounded-xl shadow overflow-auto">
            <ol className="flex flex-col gap-7">
              {tasksInList.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </ol>
          </CardContent>
        )}
      </Card>
    </li>
  );
}
