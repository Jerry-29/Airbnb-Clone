import data from "../Lucknow.json";
import  Cards  from "./Cards";

import "./product.css";

export const Products = () => {
  console.log(data);
  return (
    <div className="Main">
      <div >
        
        {data.map((e) => {
          return (
           
            <Cards {...e}/>
            
          )
        })}
      </div>
    </div>
  );
};
