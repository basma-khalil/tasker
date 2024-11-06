'use client';

// Hooks
import { useAppSelector } from '@/lib/store/hooks';
// Components
import TaskList from '@/components/board/components/task-list';
// Data
import {lists} from '@/data/lists'

export default function Board() {
  const tasks = useAppSelector((state) => state.task.tasks);

  return (
    <div className="w-full py-10">
      <ol className="flex justify-around flex-wrap gap-y-16 w-full px-5 py-3 md:px-10 lg:px-0">
        {lists.map((list) => (
          <TaskList
            key={list.id}
            currentTasks={tasks}
            listId={list.id}
            listTitle={list.title}
          />
        ))}
      </ol>

      {/* No tasks message */}
      {tasks.length === 0 && (
        <div className="text-center capitalize">
          <p>no tasks found</p>
        </div>
      )}
    </div>
  );
}
