import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'



const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        {/*Añadimos la siguiente ruta para que si se navega a la página desde cualqueir otra ruta sea redirigido a ella*/}
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>
    </Routes>
  )
}

export default AuthRoutes
 