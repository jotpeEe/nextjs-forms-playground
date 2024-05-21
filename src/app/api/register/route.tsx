import { NextRequest, NextResponse } from 'next/server';

import { schema } from '@/app/registrationSchema';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const parsed = schema.safeParse(data);

  if (parsed.success) {
    return NextResponse.json({ message: 'User registered', user: parsed.data });
  } else {
    return NextResponse.json(
      { message: 'Invalid data', error: parsed.error },
      { status: 400 }
    );
  }
};