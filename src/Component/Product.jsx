import { ProductHead } from "./ProductHead";
import "../CSS/Products.css";
import { useSelector } from "react-redux";
import {Products} from '../Component/Product/Products'
export const Product = () => {
  const data = useSelector((store) => store);
  console.log(data);
  return (
    <div className="productMain">
      <ProductHead />
      <div className="product-body">
      <Products/>
      </div>
    </div>
  );
};
