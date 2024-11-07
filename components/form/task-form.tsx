'use client';

// Core
import { useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addTask, editTask } from '@/lib/store/features/task/taskSlice';
import { closeFormModal } from '@/lib/store/features/modals/formModalSlice';
// Hooks
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
// Components
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import DescField from '@/components/form/components/desc-field';
import PriorityField from '@/components/form/components/priority-field';
import StateField from '@/components/form/components/state-field';
import TitleField from '@/components/form/components/titleI-field';
import ImageField from '@/components/form/components/image-field';
// Data
import { priorities, states } from '@/data/task';

const defaultImg = '/images/task-placeholder.jpg';

export default function TaskForm() {
  const initValues = useAppSelector((state) => state.formModal.defaultValues);
  const updateTask = useAppSelector((state) => state.formModal.updateTask);
  const withState = useAppSelector((state) => state.formModal.withState);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  // Reset date value for update task to update it with editing date
  const defaultValues: ITask = updateTask
    ? { ...initValues, date: '', image: '' }
    : {
        id: '',
        date: '',
        title: '',
        description: '',
        priority: 'medium',
        state: withState || 'todo',
        image: '',
      };

  const taskSchema: yup.ObjectSchema<ITask> = yup.object({
    id: yup
      .string()
      .default(useId())
      // Convert empty string to undefined to trigger default value
      .transform((value) => (value === '' ? undefined : value)),
    date: yup
      .string()
      .default(new Date().toISOString().slice(0, 10))
      .transform((value) => (value === '' ? undefined : value)),
    title: yup.string().required('Please enter a title for your task'),
    description: yup.string(),
    priority: yup
      .string()
      .oneOf(priorities)
      .required('Please select a priority for your task'),
    state: yup
      .string()
      .oneOf(states)
      .required('Please select a state for your task'),
    image: yup
      .string()
      .default(defaultImg)
      .transform((value) => (value === '' ? undefined : value)),
  });

  const form = useForm<ITask>({
    defaultValues,
    resolver: yupResolver(taskSchema),
  });

  const handleOnSubmit: SubmitHandler<ITask> = (data) => {
    dispatch(updateTask ? editTask(data) : addTask(data));
    dispatch(closeFormModal());
    form.reset();
    toast({
      title: updateTask
        ? 'Your task has been updated'
        : 'New task has been added',
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="space-y-6 px-1"
      >
        {/* Title Input */}
        <TitleField control={form.control} />

        {/* Description Textarea */}
        <DescField control={form.control} />

        {/* Priority Select */}
        <PriorityField control={form.control} />

        {/* State Select */}
        <StateField control={form.control} />

        {/* Image File Input */}
        <ImageField control={form.control} />

        {/* Submit Button */}
        <Button type="submit" className="capitalize">
          {updateTask ? 'update task' : 'create task'}
        </Button>
      </form>
    </Form>
  );
}
