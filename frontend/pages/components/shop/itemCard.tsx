import Link from "next/link";
import Image from "next/image";
import { Product } from "./shopGallery"; // Adjust the import path as needed

export default function itemCard(p: Product, src: string) {
  return (
    <>
      <Link href={`/shop/${p.slug}`} passHref key={p.slug}>
        <div
          className="border rounded-lg p-4 shadow
                  hover:shadow-lg transition-shadow
                  bg-gray-200 hover:bg-gray-300"
        >
          <h3>{p.name}</h3>
          <Image
            src={src}
            alt="Default image"
            className="w-full h-48 object-cover rounded"
            width={200}
            height={200}
          />
          <p>{p.description}</p>
          <p>Price: ${p.price}</p>
          <p>In Stock: {p.in_stock ? "Yes" : "No"}</p>
        </div>
      </Link>
    </>
  );
}


