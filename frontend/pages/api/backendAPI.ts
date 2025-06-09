// Base URL from your environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch a list of products, optionally with filters (e.g., price, type, size)
export async function getProducts(filters?: {
  [key: string]: string | number;
}): Promise<any> {
  let url = `${API_URL}/products/`;
  if (filters) {
    const queryParams = new URLSearchParams();
    for (const key in filters) {
      queryParams.append(key, filters[key].toString());
    }
    url += `?${queryParams.toString()}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
}

// Fetch a single product by its slug
export async function getProductBySlug(slug: string): Promise<any> {
  const url = `${API_URL}/products/${slug}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return await res.json();
}
