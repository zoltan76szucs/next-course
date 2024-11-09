import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json([
    { id: 1, name: "Zotya" },
    { id: 2, name: "Gabi" },
  ]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // params Promise-ként van megadva
) {
  const body = await request.json();
  const { id: idStr } = await params; // await használata itt a params kibontásához
  const id = parseInt(idStr, 10); // konvertáljuk számmá

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
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
