'use client';

// Core
import { useState, type ChangeEvent } from 'react';
import Image from 'next/image';
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

export default function ImageField({ control }: TitleFieldProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (
    evt: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const img = evt.target.files?.[0];
    if (!img) return;

    // Convert img file to base64 and generate image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgUrl = reader.result as string;
      setImagePreview(imgUrl);
      onChange(imgUrl);
    };
    reader.readAsDataURL(img);
  };

  return (
    <FormField
      control={control}
      name="image"
      // Handle onChange manually to control form image data
      render={({ field: { ref, onChange } }) => (
        <FormItem>
          <FormLabel className="capitalize">image</FormLabel>

          <div className="flex items-end gap-5">
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                placeholder="Add task image"
                ref={ref}
                onChange={(evt) => handleImageChange(evt, onChange)}
              />
            </FormControl>
            {imagePreview && (
              <Image
                src={imagePreview}
                alt="Image preview"
                width={100}
                height={100}
                className="object-cover rounded-md"
              />
            )}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
