import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';

export function setDummyHeader(response: NextResponse<unknown>) {
  response.headers.set('hello-from-function', 'hello from function');
  return response;
}

export async function hi() {
  const small = readFile(`./src/small.txt`, 'utf-8');
  return small;
}
