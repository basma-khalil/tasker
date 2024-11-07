// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Data
import { lists as states } from '@/data/lists';
//Types
import type { Control } from 'react-hook-form';
interface StateFieldProps {
  control: Control<ITask>;
}

export default function StateField({ control }: StateFieldProps) {
  return (
    <FormField
      control={control}
      name="state"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="required capitalize">state</FormLabel>

          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select the task state" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {states.map((state) => (
                <SelectItem
                  key={state.id}
                  value={state.title}
                  className="capitalize"
                >
                  {state.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
