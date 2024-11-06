'use client';

// Core
import { useState, useEffect } from 'react';
import Image from 'next/image';
// Hooks
import { useTheme } from 'next-themes';
import { useSidebar } from '@/components/ui/sidebar';

// Use SVG images with URL because of @svgr/webpack setup for SVG component
const darkLogo = '/images/logo-white.svg';
const lightLogo = '/images/logo-black.svg';
const logoIcon = '/images/logo-icon.svg';

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
