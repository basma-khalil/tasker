'use client';

// Hooks
import { useSidebar } from '@/components/ui/sidebar';
// Components
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
// Icons
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function SidebarTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={'outline'}
            size={'icon'}
            onClick={toggleSidebar}
            className="w-10"
            aria-label="toggle sidebar"
            aria-controls="sidebar"
            aria-expanded={open}
          >
            {open ? <ChevronsLeft /> : <ChevronsRight />}
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p className="capitalize">toggle sidebar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
