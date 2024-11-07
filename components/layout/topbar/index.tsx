'use client';

// Core
import { Suspense } from 'react';
import {
  openFormModal,
  setUpdateTask,
} from '@/lib/store/features/modals/formModalSlice';
// Hooks
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
// Components
import { Button } from '@/components/ui/button';
import Search from '@/features/search/search';
import SidebarTrigger from '@/components/layout/topbar/components/sidebar-trigger';
import SkeletonInput from '@/features/loader/skeleton-input';

export default function Topbar() {
  const isOpen = useAppSelector((state) => state.formModal.openFormModal);
  const dispatch = useAppDispatch();

  const handleOpenTaskForm = () => {
    dispatch(setUpdateTask(false));
    dispatch(openFormModal());
  };

  return (
    <header className="flex gap-5 w-full p-5">
      <SidebarTrigger />

      <Suspense fallback={<SkeletonInput />}>
        <Search />
      </Suspense>

      <Button
        onClick={handleOpenTaskForm}
        className="capitalize"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="task-form"
      >
        add task
      </Button>
    </header>
  );
}
