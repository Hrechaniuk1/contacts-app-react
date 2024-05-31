import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'


import css from './ContactsPage.module.css'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

// ------

export default function App() {
    const err = useSelector(selectError)
    const load = useSelector(selectLoading)
    const logIn = useSelector(selectIsLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        if (logIn) {
            dispatch(fetchContacts())
        }
    }, [dispatch, logIn])



    return (
        <div>
            
        <div className={css.main}>
            <h1>Phonebook</h1>
                <ContactForm/>
            <SearchBox/>
            </div>
            {!err && load && <div>Loading...</div>}
            {logIn ? <ContactList></ContactList> : <p>Please log in</p>}
            
        </div>)
    
}