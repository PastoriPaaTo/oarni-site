import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  try {
    const files = fs.readdirSync(galleryDir).filter((f) =>
      /\.(jpg|jpeg|png|webp|avif|mp4|webm)$/i.test(f)
    );
    return NextResponse.json({ images: files });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
