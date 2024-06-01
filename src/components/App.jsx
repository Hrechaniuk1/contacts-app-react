import { useSelector, useDispatch } from 'react-redux'
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import PrivateRoute from '../components/PrivatRoute/PrivatRoute'
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute'
import Layout from '../components/Layout'
import {refreshUser} from '../redux/auth/operations'
import {selectIsRefreshing } from '../redux/auth/selectors'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'))
const RegistrationForm = lazy(() => import('../components/RegistrationForm/RegistrationForm'))
const LoginForm = lazy(() => import('../components/LoginForm/LoginForm'))    



// ------

export default function App() {
    const isRefresh = useSelector(selectIsRefreshing)

    const dispatch = useDispatch()

    useEffect(() => {dispatch(refreshUser())},[dispatch])

    return isRefresh ? <p>Refreshing user</p> : <Layout>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/contacts' element={<PrivateRoute
                component={<ContactsPage></ContactsPage>}
                redirectTo={'/login'}   
            >
            </PrivateRoute>}></Route>
            <Route path='/login' element={
                <RestrictedRoute
                redirectTo='/contacts'
                component={<LoginForm></LoginForm>}
                ></RestrictedRoute>
            }></Route>
            <Route path='/register' element={
                <RestrictedRoute
                redirectTo='/contacts'
                component={<RegistrationForm></RegistrationForm>}
                ></RestrictedRoute>
            }></Route>
        </Routes>
    </Layout>
}