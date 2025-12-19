import { notFound } from "next/navigation";
import ProductDetail from "../_components/ProductDetail";
import { getProductBySlug } from "../productsData";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
