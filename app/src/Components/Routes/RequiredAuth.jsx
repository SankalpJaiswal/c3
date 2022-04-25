import { useContext } from "react"
import { Link, useLocation} from "react-router-dom"
import { AuthContext, AuthContextProvider } from "../context/AuthContext"

export const RequiredAuth = ({children})=>{

//   get the token from auth context and if token exists return the children otherwise return the follwoing

    const {token,handleLogin} = useContext(AuthContext);
    const location = useLocation();

    if(token) return children;


    return <h3>Please <Link to = "/login">login</Link> to access this page</h3>
}