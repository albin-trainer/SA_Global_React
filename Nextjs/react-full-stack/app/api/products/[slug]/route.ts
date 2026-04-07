import { products } from "../route";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
console.log(slug)
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  return Response.json(product);
}