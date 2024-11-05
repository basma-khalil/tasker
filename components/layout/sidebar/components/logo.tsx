'use client';

// Core
import { useState, useEffect } from 'react';
import Image from 'next/image';
// Hooks
import { useTheme } from 'next-themes';
import { useSidebar } from '@/components/ui/sidebar';
import darkLogo from '@/public/images/logo-white.svg';
import lightLogo from '@/public/images/logo-black.svg';
import logoIcon from '@/public/images/logo-icon.svg';

export default function Logo() {
  const [logoSrc, setLogoSrc] = useState(lightLogo); // To fix hydration error
  const { resolvedTheme } = useTheme();
  const { open } = useSidebar();

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setLogoSrc(darkLogo);
    } else {
      setLogoSrc(lightLogo);
    }
  }, [resolvedTheme]);

  return (
    <Image
      src={open ? logoSrc : logoIcon}
      alt="Tasker"
      width={open ? 144 : 40}
      height={open ? 48 : 40}
      priority
    />
  );
}
