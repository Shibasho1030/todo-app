import { NextResponse } from "next/server";

// RailsAPIから返ってきたSet-Cookieを、Next.jsのレスポンスに付け替えて、ブラウザに渡すための関数
export function forwardSetCookies(
  upstream: Response,
  downstream: NextResponse,
): NextResponse {
  const setCookies =
    typeof upstream.headers.getSetCookie === "function"
      ? upstream.headers.getSetCookie()
      : [];

  if (setCookies.length > 0) {
    for (const cookie of setCookies) {
      downstream.headers.append("set-cookie", cookie);
    }
    return downstream;
  }

  const setCookie = upstream.headers.get("set-cookie");
  if (setCookie) {
    downstream.headers.append("set-cookie", setCookie);
  }

  return downstream;
}
