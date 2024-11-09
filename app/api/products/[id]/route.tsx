import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json([{ id: 1, name: "Milk", price: 2.5 }]);
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
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ id, name: body.name, price: body.price });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // params Promise-ként van megadva
) {
  const { id: idStr } = await params; // await használata itt a params kibontásához
  const id = parseInt(idStr, 10); // konvertáljuk számmá

  if (id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ id });
}
