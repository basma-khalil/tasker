'use client';

// Core
import { closeTaskModal } from '@/lib/store/features/modals/taskDetailsSlice';
// Hooks
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Task from '@/components/board/components/task';

export default function TaskDetails() {
  const task = useAppSelector((state) => state.taskDetails.task);
  const openTaskModal = useAppSelector(
    (state) => state.taskDetails.openTaskModal
  );
  const dispatch = useAppDispatch();

  const handleCloseTaskDetails = () => {
    dispatch(closeTaskModal());
  };

  return (
    <Dialog open={openTaskModal} onOpenChange={handleCloseTaskDetails}>
      <DialogContent id='task-details' className='px-2' aria-live='polite'>
        <DialogHeader className="px-4 capitalize">
          <DialogTitle>task details</DialogTitle>
        </DialogHeader>

        <DialogDescription className="sr-only">
          you can view, edit, and delete your task details
        </DialogDescription>

        {/* Used ScrollArea to fix Dialog overflow hidden on small screen landscape view */}
        <ScrollArea className="[@media(max-height:425px)]:max-h-[300px] w-full px-4">
          <Task task={task} isModal={true} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
