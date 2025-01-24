import { NextResponse } from 'next/server';

export function setDummyHeader(response: NextResponse<unknown>) {
  response.headers.set('hello-from-function', 'hello from function');
  return response;
}

export async function hi() {
  const { readFile } = await import('fs/promises');
  const small = await readFile(`./src/small.txt`, 'utf-8');
  return small;
}
