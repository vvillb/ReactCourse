import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages'
import RegisterPage from '../pages'

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
