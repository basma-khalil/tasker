'use client';

// Core
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { setFilteredTasks } from '@/lib/store/features/filter/filterSlice';
// Hooks
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
// Components
import TaskList from '@/components/board/components/task-list';
import Filter from '@/features/filter/filter';
// Data
import { lists } from '@/data/lists';

export default function Board() {
  const allTasks = useAppSelector((state) => state.task.tasks);
  const filteredTasks = useAppSelector((state) => state.filter.filteredTasks);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const priorityQuery = searchParams.get('priority') as ITask['priority'] || '';

  const currentTasks = searchQuery || priorityQuery ? filteredTasks : allTasks;

  // Filter based on initial URL query
  useEffect(() => {
    let unmounted = false;
    if (!unmounted && searchQuery || priorityQuery) {
      dispatch(
        setFilteredTasks({ tasks: allTasks, searchQuery, priorityQuery })
      );
    }
    return () => {
      unmounted = true;
    };
  }, [dispatch, allTasks, searchQuery, priorityQuery]);

  return (
    <div className="w-full py-10">
      <Filter />

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
