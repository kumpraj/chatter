import { Link } from "react-router-dom"
import {Link as MUILink} from "@mui/material"
import Auth from "./Auth"


const SignUp = () => {
  return (
    <Auth submitlabel="Sign Up" onSubmit={async() => {} }>
        <Link to={"/login"} style={{ alignSelf: "center"}}>
            <MUILink>Login</MUILink>
        </Link>
    </Auth>
  )
}

export default SignUp