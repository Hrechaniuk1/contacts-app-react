import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import css from './AppBar.module.css'
import { selectUser, selectIsLoggedIn } from '../../redux/auth/selectors'
import { logout } from "../../redux/auth/operations"
import Navigation from '../Navigation/Navigation'


export default function AppBar() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const isLogged = useSelector(selectIsLoggedIn)

    function clickHandler() {
        dispatch(logout())
    }

    return (
        <div className={css.container}>
            <Navigation></Navigation>
            {!isLogged ? <Link to='/login'>Log In</Link> : <div>
                <p>Hello {user.name}, {user.email}</p>
            </div>}
            {!isLogged ? <Link to='/register'>Registration</Link> : <button onClick={clickHandler} >Log Out</button>}
    </div>
)
}