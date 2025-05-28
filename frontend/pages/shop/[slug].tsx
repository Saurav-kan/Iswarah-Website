import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "./index"; // Adjust the import path as needed
import Link from "next/link";

type ProductPageProps = {
  product: Product; // Product details or null if not found
};


export default function ProductPage({ product }: ProductPageProps) {

  return (
    <>
    <div>
      <h1>Product: {product.name}</h1>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>In Stock: {product.in_stock ? "Yes" : "No"}</p>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover"
        />
      )}
    </div>
    
    <div className="absolute bottom-4 right-4">

    <Link href="/shop" className="text-blue-500 hover:underline border-4">Back to rpidyc</Link>
      
    </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`)
  const products: Product[] = await res.json()

  return {
    paths: products.map(p => ({ params: { slug: p.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const slug = params!.slug as string;
  const res  = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${encodeURIComponent(slug)}/`
  );
  if (res.status === 404) return { notFound: true };

  const product: Product = await res.json();
  return {
    props:     { product },
    revalidate: 60,
  };
};
