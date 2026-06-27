import { useEffect, useState } from "react";

function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts",
      );
      const responseData = await response.json();
      const allProducts = responseData.data.data;
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
          Curated picks
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Featured products
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-3 shadow-[0_20px_80px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_-24px_rgba(59,130,246,0.35)]"
          >
            <div className="relative overflow-hidden rounded-[22px]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
                {product.category}
              </span>
            </div>

            <div className="px-2 pb-2 pt-4">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{product.brand}</p>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                  {product.price}
                </span>
              </div>

              <p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-600">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <span>★</span>
                  <span className="text-sm font-medium text-slate-700">
                    {product.rating}
                  </span>
                </div>
                <button className="rounded-full bg-linear-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
                  View product
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
