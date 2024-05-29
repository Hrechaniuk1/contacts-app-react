import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'


import css from './App.module.css'
import SearchBox from './SearchBox/SearchBox'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import AppBar from './AppBar/AppBar'
import { selectError, selectLoading } from '../redux/contacts/selectors'
import { fetchContacts } from '../redux/contacts/operations'
import {refreshUser} from '../redux/auth/operations'
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors'

// ------

export default function App() {
    const err = useSelector(selectError)
    const load = useSelector(selectLoading)
    const logIn = useSelector(selectIsLoggedIn)
    const isRefresh = useSelector(selectIsRefreshing)

    const dispatch = useDispatch()

    useEffect(() => {dispatch(refreshUser())},[dispatch])

    useEffect(() => {
        if (logIn) {
            dispatch(fetchContacts())
        }
    }, [dispatch, logIn])

    // console.log(logIn)


    return isRefresh ? <p>Refreshing user...</p> : (
        <div>
            <AppBar></AppBar>
        <div className={css.main}>
            <h1>Phonebook</h1>
                <ContactForm/>
            <SearchBox/>
            </div>
            {!err && load && <div>Loading...</div>}
            {logIn ? <ContactList></ContactList> : <p>Please log in</p>}
            
        </div>
    )
}