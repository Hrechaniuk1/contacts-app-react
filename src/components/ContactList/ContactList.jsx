import { useSelector } from "react-redux"

import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { selectContacts } from "../../redux/contacts/selectors"
import { selectFilter } from "../../redux/filter/selectors"


export default function ContactList() {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter)

    // console.log( contacts)

    function getVisibleCOntacts(array) {
        const info = array.filter(curr => curr.name.toLowerCase().includes(filter.name.toLowerCase()))
        return info
    }

    const visibleContacts = getVisibleCOntacts(contacts)


    return (
        <ul className={css.list}>
            Contacts
            {visibleContacts.map(elem => {
                return <li className={css.listItem} key={elem.id}>
                    <Contact userName={elem.name} userNumber={elem.number} id={elem.id}></Contact>
                </li>
                
            })}
        </ul>
    )
}