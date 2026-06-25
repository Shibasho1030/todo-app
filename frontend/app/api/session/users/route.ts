import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL!;

export async function POST(req: NextRequest) {
  const body = await req.json();

  const railsRes = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const data = await railsRes.json();

  const res = NextResponse.json(data, {
    status: railsRes.status,
  });

  const setCookie = railsRes.headers.get("set-cookie");

  if (setCookie) {
    res.headers.append("set-cookie", setCookie);
  }

  return res;
}
