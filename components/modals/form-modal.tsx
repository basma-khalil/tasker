'use client';

//Core
import { closeFormModal } from '@/lib/store/features/modals/formModalSlice';
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
import TaskForm from '@/components/form/task-form';
// Icons

export default function FormModal() {
  const openFormModal = useAppSelector(
    (state) => state.formModal.openFormModal
  );
  const updateTask = useAppSelector((state) => state.formModal.updateTask);

  const dispatch = useAppDispatch();

  const handleCloseFormModal = () => {
    dispatch(closeFormModal());
  };

  return (
    <Dialog open={openFormModal} onOpenChange={handleCloseFormModal}>
      <DialogContent id='task-form' className="px-2" aria-live='polite'>
        <DialogHeader>
          <DialogTitle className="capitalize px-4">
            {updateTask ? 'update task' : 'add new task'}
          </DialogTitle>
        </DialogHeader>

        {/* Used ScrollArea to fix Dialog overflow hidden on small screen landscape view */}
        <ScrollArea className="[@media(max-height:425px)]:max-h-[300px] w-full px-3">
          <DialogDescription className="sr-only">
            you can create new task or update your task
          </DialogDescription>

          <TaskForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
