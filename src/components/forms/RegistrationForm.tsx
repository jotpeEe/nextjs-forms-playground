'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { schema } from '@/app/registrationSchema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormTextInput } from '@/components/ui/FormTextInput';
import { Input } from '@/components/ui/input';

type OurSchema = z.infer<typeof schema>;

export const RegistrationForm = () => {
  const form = useForm<OurSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: '',
      last: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<OurSchema> = values => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-2">
          <FormTextInput
            name="first"
            description="Your first name."
            label
            placeholder
          />
          <FormTextInput
            name="last"
            description="Your last name."
            label
            placeholder
          />
        </div>
        <FormTextInput
          name="email"
          description="Your email adress."
          label
          placeholder
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
