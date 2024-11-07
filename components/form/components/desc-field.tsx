// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
//Types
import type { Control } from 'react-hook-form';
interface DescFieldProps {
  control: Control<ITask>;
}

export default function DescField({ control }: DescFieldProps) {
  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">add task description</FormLabel>

          <FormControl>
            <Textarea placeholder="Description" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
