import { Form, Formik, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast';

import {register} from '../../redux/auth/operations'

import css from './RegisterMenu.module.css'

export default function RegisterMenu() {
    const dispatch = useDispatch()

    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordRepeat: ''
    }
    
    function submitHandler(values, actions) {
        if (values.password !== values.passwordRepeat) {
            console.log('try again')
        } else {
            const {passwordRepeat, ...data} = values
            dispatch(register(data))
            actions.resetForm()
        }
    }

    return (
        <div>
            <Toaster
            position="top-right"
            gutter={8}
            toastOptions={{
            // Define default options
            className: '',
            duration: 1500,
            style: {
             background: '#363636',
             color: '#fff',
                }
            }}
            />
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
            >
                <Form className={css.container}>
                    <label>Name:
                        <Field type='text' name='name' required></Field>
                    </label>
                    <label>Email:
                        <Field type='email' name='email' required></Field>
                    </label>
                    <label>Password:
                        <Field type='password' name='password' required></Field>
                    </label>
                    <label>Repeat your password:
                        <Field type='password' name='passwordRepeat' required></Field>
                    </label>
                    <button type='submit' >Register</button>
                </Form>
            </Formik>
        </div>
    )
}