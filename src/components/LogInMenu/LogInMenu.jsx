import { Form, Formik, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast';

import css from './LogInMenu.module.css'
import { login } from '../../redux/auth/operations'

export default function LogInMenu() {
    const dispatch = useDispatch()

    const initialValues = {
        email: '',
        password: '',
    }
    
    function submitHandler(values, actions) {
        dispatch(login({ email: values.email, password: values.password }))
            actions.resetForm()
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
                    <label>Email:
                        <Field type='email' name='email' required></Field>
                    </label>
                    <label>Password:
                        <Field type='password' name='password' required></Field>
                    </label>
                    <button type='submit' >Log In</button>
                </Form>
            </Formik>
        </div>
    )
}