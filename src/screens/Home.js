import React, { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { useState } from "react";
const  Home =()=>{

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
       <Carousel/>
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
          foodItem.filter((item)=>item.CategoryName === data.CategoryName)
            .map(filterItems=>{
            return(
                <div key ={filterItems._id} className="col-12 col-md-6 col-lg-3">
                    <Card></Card>
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