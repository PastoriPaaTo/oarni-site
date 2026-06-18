import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const heroDir = path.join(process.cwd(), "public", "hero");

  try {
    const files = fs.readdirSync(heroDir).filter((f) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(f)
    );
    return NextResponse.json({ images: files });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
