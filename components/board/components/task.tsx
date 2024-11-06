'use client';

// Core
import Image from 'next/image';
import { useAppDispatch } from '@/lib/store/hooks';
import { deleteTask } from '@/lib/store/features/task/taskSlice';
// Hooks
import { useToast } from '@/hooks/use-toast';
// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
// Icons
import Flag from '@/assets/icons/flag.svg';
import { Clock, Pencil, Trash2 } from 'lucide-react';
// Types
interface TaskProps {
  task: ITask;
  isModal: boolean;
}

export default function Task({ task, isModal }: TaskProps) {
  const { id, date, image, title, description, priority } = task;
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  // const handleOpenTaskForm = () => {
  // };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
    toast({
      title: 'Your task has been deleted',
    });
  };

  return (
    <Card>
      {/* For task card */}
      {/* Task Image */}
      <figure className="mb-2 h-32 w-full rounded-t-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={612}
          height={612}
          className="w-full h-full object-cover"
          placeholder="blur"
          blurDataURL={'@/public/images/task-placeholder.jpg'}
        />
      </figure>

      {/* Task title */}
      <CardHeader className="overflow-hidden">
        <CardTitle>{title}</CardTitle>

        <div className="flex items-center gap-1">
          {/* Task date */}
          <Clock size={18} />
          <CardDescription>
            <time dateTime={date} suppressHydrationWarning>
              {date}
            </time>
          </CardDescription>

          {/* Task priority */}
          <p className="sr-only">{`${priority} priority`}</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Flag
                  className={`ml-2 ${
                    priority === 'high'
                      ? 'fill-red-500'
                      : task.priority === 'medium'
                      ? 'fill-yellow-500'
                      : 'fill-green-500'
                  }`}
                  width={18}
                  height={18}
                />
              </TooltipTrigger>

              <TooltipContent className="capitalize">
                <span>{`${priority} priority`}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>

      {/* For task details */}
      {isModal && (
        <>
          {/* Card description */}
          <CardContent className="first-letter:uppercase">
            <p>{description}</p>
          </CardContent>

          <CardFooter>
            {/* Edit task button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size={'icon'}
                    // onClick={handleOpenTaskForm}
                    aria-label="edit task"
                    aria-haspopup="dialog"
                    // aria-expanded={}
                    // aria-controls=""
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>

                <TooltipContent>
                  <p className="capitalize">edit task</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Delete task button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleDeleteTask}
                    size="icon"
                    className="ml-2"
                    aria-label="delete task"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>

                <TooltipContent>
                  <p className="capitalize">delete task</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
