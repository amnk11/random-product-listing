import { useEffect, useState } from "react";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState("all");

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts",
      );
      const responseData = await response.json();
      const allProducts = responseData.data.data;
      setProducts(allProducts);

      console.log(responseData.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    {products.map((product) => (
        <div key={product.id}>
            
        </div>
    ))}
    </>
  )
}

export default ProductCard;
