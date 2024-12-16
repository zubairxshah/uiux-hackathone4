import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const url = req.nextUrl;
  const name = url.searchParams.get("name");
  const token = url.searchParams.has("token");
  if (token) {
    return NextResponse.json({ message: "You are authorized" });
  }
  // console.log(token)
  return NextResponse.json({ message: "You are not authorized.." });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  if (body.token) {
  }
  return NextResponse.json({ message: "I am post API" });
}

export async function Delete(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  if (body.token) {
  }
  return NextResponse.json({ message: "I am post API" });
}
