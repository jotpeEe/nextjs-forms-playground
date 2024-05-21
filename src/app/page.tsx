import Image from 'next/image';

import { RegistrationForm } from '@/components/forms/RegistrationForm';

export default function Home() {
  return (
    <div className="mx-auto max-w-xl">
      <RegistrationForm />
    </div>
  );
}
