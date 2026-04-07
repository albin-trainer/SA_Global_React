// app/api/products/route.ts
import { randomUUID } from "crypto";
//  In-memory DB (persists while server runs)
export let products = [
  { id: 1, name: "iPhone 15", slug: "iphone-15", price: 70000 },
  { id: 2, name: "OnePlus", slug: "OnePlus", price: 30000 },
];

//  GET - fetch all products
export async function GET() {
  return Response.json(products);
}

//  POST - add new product
export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = {
   id: randomUUID(),
    ...body,
  };

  products.push(newProduct);

  return Response.json(
    {
      message: "Product created",
      data: newProduct,
    },
    { status: 201 }
  );
}

//  PUT - update product
export async function PUT(req: Request) {
  const body = await req.json();

  //finding the index for the element
  const index = products.findIndex(p => p.id === body.id);

  if (index === -1) {
    return Response.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }
  products[index] = { ...products[index], ...body, };

  return Response.json({
    message: `Product ${body.id} updated`,
    data: products[index],
  });
}

//  DELETE - remove product
export async function DELETE(req: Request) {
  const { id } = await req.json();

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return Response.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  const deletedProduct = products.splice(index, 1);

  return Response.json({
    message: `Product ${id} deleted`,
    data: deletedProduct[0],
  });
}