import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"


function PrivateRoute() {
    const {currentUser} = useSelector(state => state.user)

    //if there is a currentUser, show profile page (using Outlet)
  return currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateRoute