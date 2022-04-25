import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = async(email, password) => {
    //  api request to reqres.in for the token
    let res = await fetch("https://reqres.in/api/login",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(
        {
          email: "admin",
          password: "admin"
        }
      )
    })

    let data = await res.json();
    setToken(data.token);

    if(email=="admin" && password=="admin"){
      setToken(true)
    }
    else{
      alert("wrong credentials")
    }

    
  };
  const handleLogout = () => {
    //  set token back to " " once logged 
    setToken("")
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
