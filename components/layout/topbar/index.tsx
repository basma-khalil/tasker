// Components
import { Button } from '@/components/ui/button';
import Search from '@/features/search/search';
import SidebarTrigger from '@/components/layout/topbar/components/sidebar-trigger';

export default function Topbar() {
  // const handleOpenTaskForm = () => {
  // };

  return (
    <header className="flex gap-5 w-full p-5">
      <SidebarTrigger />

      <Search />

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
