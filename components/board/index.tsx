'use client';

// Core
import { useSearchParams } from 'next/navigation';
// Hooks
import { useAppSelector } from '@/lib/store/hooks';
// Components
import TaskList from '@/components/board/components/task-list';
// Data
import { lists } from '@/data/lists';

export default function Board() {
  const allTasks = useAppSelector((state) => state.task.tasks);
  const filteredTasks = useAppSelector((state) => state.filter.filteredTasks);
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get('query');

  const currentTasks = searchQuery ? filteredTasks : allTasks;

  return (
    <div className="w-full py-10">
      <ol className="flex justify-around flex-wrap gap-y-16 w-full px-5 py-3 md:px-10 lg:px-0">
        {lists.map((list) => (
          <TaskList
            key={list.id}
            currentTasks={currentTasks}
            listId={list.id}
            listTitle={list.title}
          />
        ))}
      </ol>

      {/* No tasks message */}
      {currentTasks.length === 0 && (
        <div className="text-center capitalize">
          <p>no tasks found</p>
        </div>
      )}
    </div>
  );
}
