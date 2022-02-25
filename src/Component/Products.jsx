import { ProductHead } from "./ProductHead";
import "../CSS/Products.css";
import { useSelector } from "react-redux";
export const Products = () => {
  const data = useSelector((store) => store);
  console.log(data);
  return (
    <div className="productMain">
      <ProductHead />
      <div className="product-body">
        <h1>Data</h1>
      </div>
    </div>
  );
};
