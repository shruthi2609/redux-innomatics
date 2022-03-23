import { useDispatch } from "react-redux";
import { login,logout } from "../Slices/userSlice";
const LoginComponent=()=>{
    const dispatch=useDispatch()
    const handleLogin=()=>{
        dispatch(login({username:"john@gmail.com",role:"admin"}))
    }
    const handleLogout=()=>{
        dispatch(logout())
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default LoginComponent