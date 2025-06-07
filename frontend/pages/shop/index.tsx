import Home from "../components/shop/shopGallery";
import Filter from "../components/shop/filter";

import { GetStaticProps } from "next";
import { Product } from "../components/shop/shopGallery";

interface ShopProps {
  products: Product[];
}

export default function Shop({ products }: ShopProps) {
  return (
    <>
      <div className="w-1/5 h-screen fixed left-0 bg-gray-100 p-4">
        <Filter />
      </div>
      <div className="w-4/5 ml-auto p-8 align-left">
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
