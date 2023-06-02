import React from "react";
import { Link } from "react-router-dom";
const Card=()=>{
    return(
        <>
        
       <div className="card mt-3" style={{"width": "18rem","maxheight":"100px"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example   content.</p>
    <Link to="/" class="btn btn-primary">Go somewhere</Link>
  <div className='container w-100'>
   <select className="m-2 h-100  bg-success">
   {Array.from(Array(6),(e,i)=>{
    return(<option key={i+1} value={i+1}>
      {i+1}
    </option>)
   })}
   </select>
   <select className="m-2 h-100  bg-success">
  <option value="half">half</option>
  <option value="full">full</option>
   </select>
   
  </div>
  </div>
</div>
        </>
    )
}
export default Card;