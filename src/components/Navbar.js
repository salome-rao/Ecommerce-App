import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{

    return(
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-success" style={{"color":"FFDFD8"}}>
  <div class="container-fluid" >
    <Link class="navbar-brand" to="/">Flor Decor</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Contact</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="to">Action</Link></li>
            <li><Link class="dropdown-item" href="to">Another action</Link></li>
           
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;
