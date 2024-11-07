'use client';

// Core
import { useEffect } from 'react';
import Link from 'next/link';
// Components
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full h-[70vh] capitalize">
      <h2 className="text-2xl font-bold">something went wrong!</h2>

      <div className="flex justify-center gap-3 flex-wrap">
        <Button className="w-28 capitalize" onClick={() => reset()}>
          try again
        </Button>

        <Button asChild className="w-28">
          <Link href="/">return home</Link>
        </Button>
      </div>
    </div>
  );
}
