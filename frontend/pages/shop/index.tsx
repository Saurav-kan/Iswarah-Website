import { GetStaticProps } from "next";
import Home from "../components/shop/shopGallery";
import Filter from "../components/shop/filter";
import { getProducts } from "../api/backendAPI"; 
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
  try {
    const products: Product[] = await getProducts();
    return {
      props: {
        products,
      },
      revalidate: 60, // revalidate every 60 seconds
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        products: [],
      },
      revalidate: 60,
    };
  }
};
