import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <div style={{
      margin:"10px",
      padding: "40px",
      backgroundColor: "orange",
      color: "blue",
      display:"flex",
      gap: "50px"
    }}>
    
        {/* keep all the NavLinks here */}
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <Link to="/about">About</Link>
        </div>

        <div>
          <Link to="/books">Books</Link>
        </div>

        <div>
          <Link to="/login">Login</Link>
        </div>
        
    
    </div>
  );
};
