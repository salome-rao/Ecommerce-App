import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-success"
        style={{ color: "FFDFD8" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Flor Decor
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mb-1">
              <li class="nav-item">
                <Link class="nav-link active fs-5" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5" to="/">
                  About
                </Link>
              </li>

              {/* <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="to">Action</Link></li>
            <li><Link class="dropdown-item" href="to">Another action</Link></li>
           
          </ul>
        </li> */}

              {localStorage.getItem("authToken") ? (
                <li class="nav-item">
                  <Link
                    class="nav-link active fs-5"
                    aria-current="page"
                    href="/"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                " "
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  class="nav-link"
                  to="/login"
                  className="btn bg-white text-success mx-1"
                >
                  Login
                </Link>

                <Link
                  class="nav-link"
                  to="/CreateUser"
                  className="btn bg-white text-success mx-1"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn mx-2 bg-white text-success">My Cart</div>
                <div
                  className="btn mx-2 bg-white text-danger "
                  onClick={handleLogout}
                >
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
