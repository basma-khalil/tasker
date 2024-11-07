// Core
import { Suspense } from 'react';
// Components
import Board from '@/components/board';
import Loading from '@/app/loading';
import TaskDetails from '@/components/modals/task-details';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Board />
      </Suspense>
      <TaskDetails />
    </>
  );
}
