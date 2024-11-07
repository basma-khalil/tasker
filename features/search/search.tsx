'use client';

//Core
import { useState, useMemo, type ChangeEventHandler } from 'react';
import { useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';
import { setFilteredTasks } from '@/lib/store/features/filter/filterSlice';
// Hooks
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import useUpdateUrlParams from '@/hooks/use-update-url-params';
// Components
import { Input } from '@/components/ui/input';

export default function Search() {
  const tasks = useAppSelector((state) => state.task.tasks);
  const filteredTasks = useAppSelector((state) => state.filter.filteredTasks); // To handle no result message
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const updateUrlParams = useUpdateUrlParams();
  const initQuery = searchParams.get('query') || '';
  const priorityQuery = searchParams.get('priority') as ITask['priority'] || '';

  const [searchQuery, setSearchQuery] = useState(initQuery);

  const debouncedSearch = useMemo(() => {
    const searchFilter = (query: string) => {
      dispatch(setFilteredTasks({ tasks, searchQuery: query, priorityQuery }));
    };
    return debounce(searchFilter, 300);
  }, [dispatch, priorityQuery, tasks]);

  // Search when input change
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const query = evt.target.value.trim();
    updateUrlParams('query', query);
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        search tasks by title
      </label>

      <Input
        id="search"
        type="search"
        name="search"
        defaultValue={searchQuery}
        onChange={handleSearch}
        placeholder="Search tasks by title..."
        className="pl-10 bg-search-icon bg-no-repeat bg-[length:20px_20px] [background-position:10px_50%]"
        autoComplete="search"
      />

      {/* No results message */}
      {searchQuery && filteredTasks.length === 0 && (
        <p className="mt-2 text-[0.8rem] font-medium text-destructive first-letter:uppercase">
          no tasks match your search {`"${searchQuery}"`}
        </p>
      )}
    </div>
  );
}
