import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // params Promise-ként van megadva
) {
  const { id: idStr } = await params; // await használata itt a params kibontásához
  const id = parseInt(idStr, 10); // konvertáljuk számmá

  const product = await prisma.product.findUnique({ where: { id: id } });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
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

  const product = await prisma.product.findUnique({ where: { id: id } });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // params Promise-ként van megadva
) {
  const { id: idStr } = await params; // await használata itt a params kibontásához
  const id = parseInt(idStr, 10); // konvertáljuk számmá

  const product = await prisma.product.findUnique({ where: { id: id } });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const deletedProduct = await prisma.product.delete({
    where: { id: product.id },
  });

  return NextResponse.json({ deletedProduct });
}
