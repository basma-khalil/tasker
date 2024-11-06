// Core
import { Suspense } from 'react';
// Components
import Board from '@/components/board';
import Loading from '@/app/loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Board />
    </Suspense>
  );
}
