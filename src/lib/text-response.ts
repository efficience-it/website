import { NextResponse } from "next/server";

export function textResponse(body: string): NextResponse {
  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
