import "./globals.css";
import CardProduct from "./components/cards/card-product";
import Toast from "./components/toast";


export default async function Home() {
  // Fetching product data from DummyJSON//
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products.map(product => {
    return {
      id: product.id,
      title: product.title,
      price: Number(product.price),
      discount: Number(product.discountPercentage),
      mrp: Number((100 * product.price) / (100 - product.discountPercentage)).toFixed(2),
      images: product.images
    }
  })

  return (

    <div className="grid grid-cols-2 justify-items-center px-2 md:gap-2 md:px-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {
        products.map(product => { return (<CardProduct key={product.id} product_id={product.id} product_title={product.title} product_price={product.price} product_discount={product.discount} product_mrp={product.mrp} product_image={product.images[0]} />) })
      }
    </div>
  );
}
