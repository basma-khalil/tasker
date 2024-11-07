// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
//Types
import type { Control } from 'react-hook-form';
interface TitleFieldProps {
  control: Control<ITask>;
}

export default function TitleField({ control }: TitleFieldProps) {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="required capitalize">title</FormLabel>

          <FormControl>
            <Input type="text" placeholder="Add task title" aria-required {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
