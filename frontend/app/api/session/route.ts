import { forwardSetCookies } from "@/_lib/forwardSetCookies";
import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL!;

export async function POST(req: NextRequest) {
  const body = await req.json();

  const railsRes = await fetch(`${API_BASE_URL}/session`, {
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

  return forwardSetCookies(railsRes, res);
}

export async function DELETE(req: NextRequest) {
  const railsRes = await fetch(`${API_BASE_URL}/session`, {
    method: "DELETE",
    headers: {
      Cookie: req.headers.get("cookie") ?? "",
    },
    cache: "no-store",
  });

  const res = NextResponse.json(null, {
    status: railsRes.status,
  });

  return forwardSetCookies(railsRes, res);
}
