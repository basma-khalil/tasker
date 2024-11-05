'use client';

// Core
import { useEffect, useState } from 'react';
// Hooks
import { useTheme } from 'next-themes';
import { useSidebar } from '@/components/ui/sidebar';
// Icons
import { Moon, Sun } from 'lucide-react';
// Types
import type { ChangeEventHandler } from 'react';

export default function ModeToggle() {
  const [isClient, setIsClient] = useState(false); // To fix hydration error
  const { resolvedTheme, setTheme } = useTheme();
  const { open } = useSidebar();

  const handleToggle: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTheme(evt.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative flex items-center">
      <input
        id="toggle-mode"
        type="checkbox"
        checked={resolvedTheme === 'dark'}
        onChange={handleToggle}
        className="sr-only peer focus:outline-none"
      />
      <label
        htmlFor="toggle-mode"
        className={`relative inline-flex h-[32px] p-[6px] pr-[5px] items-center justify-between rounded-full bg-sidebar-foreground transition-all cursor-pointer peer-focus-visible:ring-1 peer-focus-visible:ring-ring
            ${open ? 'w-[60px]' : 'w-[32px]'}
          `}
      >
        <span className="sr-only">toggle dark mode</span>
        <span
          className={`absolute top-[3px] left-[3px] size-[26px] rounded-full !transition-transform duration-600
              ${
                open && resolvedTheme === 'dark'
                  ? 'translate-x-[29px]'
                  : 'translate-x-0 '
              }
              ${open ? 'bg-sidebar' : 'bg-sidebar-foreground'}
            `}
        ></span>
        <Sun
          size={20}
          className={`transition-all z-[1] hover:text-primary ${
            resolvedTheme === 'dark'
              ? 'text-sidebar'
              : 'text-sidebar-accent-foreground'
          } ${!open && resolvedTheme === 'light' && 'hidden'}`}
        />
        <Moon
          size={20}
          className={`transition-all z-[1] hover:text-primary ${
            resolvedTheme === 'dark'
              ? 'text-sidebar-accent-foreground'
              : 'text-sidebar'
          } ${!open && resolvedTheme === 'dark' && 'hidden'}`}
        />
      </label>
    </div>
  );
}
