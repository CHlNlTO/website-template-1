import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "world",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return (
    console.log(body),
    NextResponse.json(body)
  );
}