import Product from "../../components/Product";
import { useSelector } from "react-redux";
import Header from "../../components/Header";

export default function Products() {
  const products = useSelector(({ products }) => products);

  return (
    <>
      <>
        <Header />
      </>

      {products.map((product) => (
        <>
          <Product key={product.id} product={product} />
        </>
      ))}
    </>
  );
}
