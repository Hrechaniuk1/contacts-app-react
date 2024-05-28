import {Form, Formik, Field} from 'formik'

import css from './LogInMenu.module.css'

export default function LogInMenu() {

    const initialValues = {
        email: '',
        password: '',
    }
    
    function submitHandler(values, actions) {
            console.log(values)
            actions.resetForm()
    }

    return (
        <div>
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