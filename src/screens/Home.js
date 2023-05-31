import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const  Home =()=>{

    return(
        <div>
       <Navbar>
        
       </Navbar>

       <div className="card mt-3" style={{"width": "18rem","maxheight":"100px"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example   content.</p>
    <Link to="/" class="btn btn-primary">Go somewhere</Link>
  <div className='container w-100'>
   <select className="m-2 h-100 w-100 bg-success">
   {/* {Array.from(Array(6),(1)=>{
    return(<option>
      dkjjkk
    </option>)
   })} */}
   </select>
  </div>
  </div>
</div>
        </div>
    )
}
export default Home;