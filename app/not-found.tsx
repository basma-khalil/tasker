// Core
import Link from 'next/link';
// Components
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
      <h2 className="text-2xl font-bold capitalize">not found</h2>
      <p className="first-letter:uppercase">
        could not find requested resource
      </p>
      <Button asChild className="capitalize">
        <Link href="/">return home</Link>
      </Button>
    </div>
  );
}
