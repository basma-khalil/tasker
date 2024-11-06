// Component
import Task from '@/components/board/components/task';

interface TaskCardProps {
  task: ITask;
}

export default function TaskCard({ task }: TaskCardProps) {

  // const handleOpenTaskDetails = () => {
  // };

  return (
    <li
      className="transition-opacity cursor-pointer hover:opacity-80"
      // onClick={handleOpenTaskDetails}
      // onKeyDown={(e) => {
      //   if (e.key === 'Enter' || e.key === ' ') {
      //     handleOpenTaskDetails();
      //   }
      // }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      // aria-expanded={}
      // aria-controls=""
    >
      <Task task={task} isModal={false} />
    </li>
  );
}
