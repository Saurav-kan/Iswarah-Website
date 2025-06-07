import Home from "./items";
import { GetStaticProps } from "next";
import { Product } from "./items";

interface ShopProps {
  products: Product[];
}

export default function Shop({ products }: ShopProps) {
  return (
    <>
    <div className ="w-4/5 ml-auto p-8 align-left">
      <Home products={products} />
    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`);
  const products = await res.json();
  return {
    props: {
      products,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};
