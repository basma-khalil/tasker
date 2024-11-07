// Components
import SkeletonCol from '@/features/loader/skeleton-col';
// Data
import { lists } from '@/data/lists';

export default function Loading() {
  return (
    <div className="flex justify-around flex-wrap gap-y-16 h-full px-5 pt-28 pb-10 md:px-10 lg:px-0">
      {lists.map((_, index) => (
        <SkeletonCol key={index} />
      ))}
    </div>
  );
}
