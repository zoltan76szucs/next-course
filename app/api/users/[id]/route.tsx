import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idStr } = await params; // await használata itt a params kibontásához
  const id = parseInt(idStr, 10); // konvertáljuk számmá

  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // params Promise-ként van megadva
) {
  const body = await request.json();
  const { id: idStr } = await params; // await használata itt a params kibontásához
  const id = parseInt(idStr, 10); // konvertáljuk számmá

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // params Promise-ként van megadva
) {
  const { id: idStr } = await params; // await használata itt a params kibontásához
  const id = parseInt(idStr, 10); // konvertáljuk számmá

  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id });
}
