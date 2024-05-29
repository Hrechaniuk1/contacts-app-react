import { useSelector, useDispatch } from "react-redux"

import LogInMenu from '../LogInMenu/LogInMenu'
import RegisterMenu from '../RegisterMenu/RegisterMenu'
import css from './AppBar.module.css'
import { selectUser, selectIsLoggedIn } from '../../redux/auth/selectors'
import { logout } from "../../redux/auth/operations"


export default function AppBar() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const isLogged = useSelector(selectIsLoggedIn)

    function clickHandler() {
        dispatch(logout())
    }

    return (
        <div className={css.container}>
            {!isLogged ? <LogInMenu></LogInMenu> : <div>
                <p>Hello {user.name}, {user.email}</p>
            </div>}
            {!isLogged ? <RegisterMenu></RegisterMenu> : <button onClick={clickHandler} >Log Out</button>}
    </div>
)
}