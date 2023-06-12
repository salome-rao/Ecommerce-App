import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login=()=>{
    let navigate = useNavigate();
        const[credential,setcredential]=useState({email:"",password:""})
   
     const handleSubmit= async(e)=>{
       e.preventDefault();
       const response = await fetch("http://localhost:5000/api/loginuser",{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({email:credential.email,password:credential.password})
       });
       const json = await response.json()
       console.log(json);
   
       if(!json.success){
   alert("enter valid credentials");
       }else
       navigate("/");
     }
    const onchange=(event)=>{
       setcredential({...credential,[event.target.name]:event.target.value})
    }
return(
    <div>
    
    <div className='container m-3'>

<form onSubmit={handleSubmit}>
   

<div class="mb-3">
<label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credential.email} onChange={onchange}/>
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label htmlFor="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credential.password} onChange={onchange}/>
</div>


<button type="submit" class="m-3 btn btn-success">Submit</button>
<Link to="/createuser" className="m-3 btn btn-danger">I am a new User</Link>
</form>
</div>
    </div>
)
}
export default Login;