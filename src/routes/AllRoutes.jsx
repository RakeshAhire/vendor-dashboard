import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import AddProducts from '../pages/AddProducts'
import Dashboard from '../pages/Dashboard'
import ForgotPassword from '../pages/ForgotPassword'
import Login from '../pages/Login'
import Order from '../pages/Order'
import Products from '../pages/Products'
import ResetPassword from '../pages/ResetPassword'
import TodaysOrder from '../pages/TodaysOrder'
import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route path="/vendor" element={<PrivateRoute> <MainLayout /></PrivateRoute>}>
                <Route index element={<Dashboard />} />
                <Route path='allproducts' element={<Products />} />
                <Route path='addproducts' element={<AddProducts />} />
                <Route path='allorders' element={<Order />} />
                <Route path='todaysorders' element={<TodaysOrder />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes
