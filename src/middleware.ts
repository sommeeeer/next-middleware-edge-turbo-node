import { NextResponse } from 'next/server';

import { setDummyHeader } from './lib/node-native';

export function middleware() {
  const response = NextResponse.next();

  return setDummyHeader(response);
}
