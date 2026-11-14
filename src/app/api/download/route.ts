import { NextResponse } from "next/server";
import { APK_DOWNLOAD_URL } from "@/lib/site";

export function GET() {
  return NextResponse.redirect(APK_DOWNLOAD_URL, 307);
}
