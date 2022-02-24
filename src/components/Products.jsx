import data from "../Lucknow.json";

export const Products = () => {
  console.log(data)
  return (
    <div>
      {data.map((e)=>(
       <h1>name:{e.name}-location:{e.location}</h1>
      
      ))}

    </div>

  );
 
};
