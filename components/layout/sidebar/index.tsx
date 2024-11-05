// Core
import Link from 'next/link';
// Components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Logo from '@/components/layout/sidebar/components/logo';
import ModeToggle from '@/components/layout/sidebar/components/mode-toggle';
// Icons
import { House, SquareKanban } from 'lucide-react';

// Menu items.
const items = [
  {
    title: 'board',
    url: '/',
    icon: SquareKanban,
  },
];

export function AppSidebar() {
  return (
    <Sidebar id="sidebar" collapsible="icon">
      {/* Logo */}
      <SidebarHeader className="items-center pt-10">
        <h1>
          <Link href={'/'}>
            <Logo />
          </Link>
        </h1>
      </SidebarHeader>

      {/* Navigation Menu */}
      <SidebarContent className="justify-center capitalize">
        <SidebarGroup className="gap-6">
          <SidebarGroupLabel className="pl-20 gap-2 text-base">
            <House className="-m-0.5" />
            <span>home</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="pl-20 gap-3 text-2xl">
                    <Link href={item.url}>
                      <item.icon className="!size-5 -ml-1" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Toggle Mode Button */}
      <SidebarFooter className="items-center h-1/4">
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
