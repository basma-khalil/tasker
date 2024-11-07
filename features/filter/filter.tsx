'use client';

//Core
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { setFilteredTasks } from '@/lib/store/features/filter/filterSlice';
// Hooks
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import useUpdateUrlParams from '@/hooks/use-update-url-params';
// Components
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
// Icons
import { ListFilter, Check, ChevronsUpDown } from 'lucide-react';

const priorities: ITask['priority'][] = ['low', 'medium', 'high'];

export default function Filter() {
  const [open, setOpen] = useState(false);
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const updateUrlParams = useUpdateUrlParams();
  const searchQuery = searchParams.get('query') || '';
  const priorityQuery = searchParams.get('priority') as ITask['priority'] || '';

  // Filter when input change
  const handlePriorityFilter = (priority: string) => {
    const selectedPriority = priority === priorityQuery ? '' : priority;
    updateUrlParams('priority', selectedPriority);
    dispatch(setFilteredTasks({ tasks, searchQuery, priorityQuery }));
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-2 w-full p-5 capitalize">
      <ListFilter />

      <Label htmlFor="search" className="mr-3">
        filter tasks by priority
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[120px] md:w-[200px] justify-between font-normal capitalize"
          >
            {priorityQuery ? priorityQuery : 'select priority'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[120px] md:w-[200px] p-0 capitalize">
          <Command>
            <CommandList>
              <CommandGroup>
                {priorities.map((priority) => (
                  <CommandItem
                    key={priority}
                    value={priority}
                    onSelect={handlePriorityFilter}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        priorityQuery === priority ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {priority}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
