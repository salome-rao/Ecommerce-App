import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
const handleAddToCart=()=>{
  
}

  return (
    
    <div >
      <div className="card mt-3" style={{ width: "18rem", maxheight: "360px" }}>
        <img src={props.imgSrc} class="card-img-top" alt="..." style={{ objectFit:"fill", height: "200px" }}/>

        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* //<p className="card-text">Some quick example   content.</p> */}

          <div className="container w-100">
            <select className="m-2 h-100  bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            {/* <select className="m-2 h-100  bg-success">
  <option value="half">half</option>
  <option value="full">full</option>
   </select> */}

            <div className="d-inline h-100 fs-5">{props.foodPrice}</div>
          </div>
          <hr></hr>
          <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
