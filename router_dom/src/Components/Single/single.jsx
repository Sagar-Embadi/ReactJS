import { useParams,Link,Outlet } from "react-router-dom"

export function Single({data}){
    const { id } = useParams();
    console.log(data);
    
    const itemFound = data.find((x)=>x.id === parseInt(id))
    console.log(itemFound);
    
  return (
    <div style={{ border: "2px solid black", padding: "10px", marginTop: "20px" }}>
      <h2>Product Details</h2>
      <img src={itemFound.image} alt={itemFound.name} width={150} />
      <h3>{itemFound.name}</h3>
      <p>Product ID: {itemFound.id}</p>
      <div style={{display:"flex",gap:20}}>
        <Link to={`/recipes/${itemFound.id}/ingredients`}>Ingredients</Link>
        <Link to={`/recipes/${itemFound.id}/instructions`}>how to do it</Link>
      </div>

      <Outlet context={itemFound} />
      
    </div>
  );
};
