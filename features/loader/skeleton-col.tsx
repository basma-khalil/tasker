// Components
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCol() {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-[28%] h-96">
      <Card className="h-14 p-0">
        <Skeleton className="h-full" />
      </Card>
      <Card className="flex-grow p-0">
        <Skeleton className="h-full" />
      </Card>
    </div>
  );
}
