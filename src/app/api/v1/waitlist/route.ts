import { db } from "@/lib/firebase/admin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, message: "Invalid email" },
      { status: 400 }
    );
  }

  try {
    await db.collection("waitlist").add({
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
