import { useSelector } from "react-redux"

import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import {selectFilteredContacts } from "../../redux/selectors"


export default function ContactList() {
    const visibleContacts = useSelector(selectFilteredContacts)

    return (
        <ul className={css.list}>
            {visibleContacts.map(elem => {
                return <li className={css.listItem} key={elem.id}>
                    <Contact userName={elem.name} userNumber={elem.number} id={elem.id}></Contact>
                </li>
                
            })}
        </ul>
    )
}