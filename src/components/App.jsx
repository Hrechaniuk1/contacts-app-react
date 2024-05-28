import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'


import css from './App.module.css'
import SearchBox from './SearchBox/SearchBox'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import { selectError, selectLoading } from '../redux/selectors'
import {fetchContacts} from '../redux/contactsOps'

// ------

export default function App() {
    const err = useSelector(selectError)
    const load = useSelector(selectLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])


    return (
        <div>
        <div className={css.main}>
            <h1>Phonebook</h1>
                <ContactForm/>
            <SearchBox/>
            </div>
            {!err && load &&  <div>Loading...</div>}
            <ContactList/>
            
        </div>
    )
}