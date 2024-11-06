// Core
import { Suspense } from 'react';
// Components
import { Button } from '@/components/ui/button';
import Search from '@/features/search/search';
import SidebarTrigger from '@/components/layout/topbar/components/sidebar-trigger';
import Loading from '@/app/loading';

export default function Topbar() {
  // const handleOpenTaskForm = () => {
  // };

  return (
    <header className="flex gap-5 w-full p-5">
      <SidebarTrigger />

      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>

      <Button
        // onClick={handleOpenTaskForm}
        className="capitalize"
        aria-haspopup="dialog"
        // aria-expanded={}
        // aria-controls=""
      >
        add task
      </Button>
    </header>
  );
}
