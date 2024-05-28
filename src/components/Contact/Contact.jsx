import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux"

import css from './Contact.module.css'

import {deleteContact} from '../../redux/contactsOps'

export default function Contact({ userName, userNumber, id }) {
    const dispatch = useDispatch()
    function deleteHandler() {
        dispatch(deleteContact(id))
        
    }

    return (
        <div className={css.container}>
            <ul>
                <li className={css.listItem}><IoMdContact size={20} />{userName}</li>
                <li className={css.listItem}><FaPhoneAlt size={20} />{userNumber}</li>
            </ul>
            <button className={css.btn} onClick={deleteHandler}>Delete</button>
        </div>
    )
}