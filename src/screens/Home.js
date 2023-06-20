import React, { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { useState } from "react";
const  Home =()=>{
const [search, setSearch]=useState('');
const [foodCat,setFoodCat]=useState({});
const [foodItem,setFoodItem]=useState({});

const loadData = async()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        }
    });

   
    response = await response.json();
    setFoodItem(response[1]);
    setFoodCat(response[0]);
    console.log(response[1]); 
    console.log(response[0]); 
    

}

useEffect(()=>{
    loadData()
},[])

    return(
        <div>
      
       <Navbar/>
       

       <>
     
     <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" style={{objectFit:'contain !important'}}>
  <div className="carousel-inner" id="carousel">
  <div class="carousel-caption " style={{zIndex:'10'}}>
  <div class="d-flex justify-content-center">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </div>
      </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700/?fruit" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?fruit" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</>



<div className="container">

{
    Array.isArray(foodCat) ? (
      foodCat.length > 0 ? (
        foodCat.map((data) => {
          return (<div className="row mb-3">
          <div key={data._id}>
            {data.CategoryName}
          </div>
          <hr></hr>
          { foodItem!== []? 
          foodItem.filter((item)=>(item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search)))
            .map(filterItems=>{
            return(
                <div key ={filterItems._id} className="col-12 col-md-6 col-lg-3">
                    <Card foodName={filterItems.name}
                     imgSrc ={filterItems.img}
                     foodPrice = {filterItems.price}
                     >
                        
                    </Card>
                    </div>
            )
          })
        :<div>no data found</div>
          }
          </div>)
        })
      ) : (
        <div>Empty array</div>
      )
    ) : (
      <div>Not an array</div>
    )
  }
  

    {/* //video 9 from the playlist */}
</div>

 <Footer>

 </Footer>
  </div>
    )
}
export default Home;