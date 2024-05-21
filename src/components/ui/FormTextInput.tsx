import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';
import { capFirst } from '@/utils/capFirst';

type TextInputFormProps = Omit<InputProps, 'placeholder'> & {
  name: string;
  placeholder?: boolean | string;
  label?: boolean | string;
  description?: string;
};

export const FormTextInput = ({
  description,
  name,
  label,
  placeholder,
  ...rest
}: TextInputFormProps) => {
  const { control } = useFormContext();

  const placeholderText = placeholder
    ? typeof placeholder === 'string'
      ? placeholder
      : capFirst(name)
    : undefined;
  const labelText = typeof label === 'string' ? label : capFirst(name);

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{labelText}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholderText} {...field} {...rest} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
