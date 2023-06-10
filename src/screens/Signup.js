import React from 'react';
import { Link, json } from 'react-router-dom';
import { useState } from 'react';
const Signup=()=>{

     const[credential,setcredential]=useState({name:"",email:"",password:"",location:""})

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credential.name,email:credential.email,password:credential.password,location:credential.location})
    });
    const json = await response.json()
    console.log(json);

    if(!json.success){
alert("enter valid credentials");
    }else
    alert("success");
  }
 const onchange=(event)=>{
    setcredential({...credential,[event.target.name]:event.target.value})
 }
    return(<>
     <div className='container m-3'>

    <form onSubmit={handleSubmit}>
       
<div class="mb-3">
    <label htmlfor="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name='name' value={credential.name} onChange={onchange} />
    
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credential.email} onChange={onchange}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credential.password} onChange={onchange}/>
  </div>
  <div class="mb-3">
    <label htmlFor="location" class="form-label">Address</label>
    <input type="text" class="form-control" id="location" name='location' value={credential.location} onChange={onchange}/>
  </div>
 
  <button type="submit" class="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a user ?</Link>
</form>
</div>
    </>)
}
export default Signup;