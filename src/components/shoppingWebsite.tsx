import React, { useEffect, useState } from "react";
export interface Product {
  title: string;
  id: number;
  price: number;
  description: string;
  category: string;
  image: string;
}
export const Shopping: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fetchProducts = async (): Promise<void> => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          color: "greenyellow",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Stop & shop
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 2fr))",
          gap: "20px",
          margin: "20px",
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                border: "2px solid #ccc",
                padding: "10px",
                borderRadius: 8,
                gap: 15,
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "200px" }}
              />
              <p style={{ textAlign: "center" }}>{product.title}</p>
              <p style={{ textAlign: "center" }}>Price: ${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
