import { Link } from "react-router-dom"
import {Link as MUILink} from "@mui/material"
import Auth from "./Auth"


const Login = () => {
  return (
    <Auth submitlabel="Login" onSubmit={async() => {} }>
        <Link to={"/signup"} style={{ alignSelf: "center"}}>
            <MUILink>Sign Up</MUILink>
        </Link>
    </Auth>

  )
}

export default Login