import React from 'react'
import {Route,Routes} from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

const AppRouter = () => {
  return (
    <Routes>
        <Route>
            {/*Login y regstro */}
            {/*Cualquier ruta que empiece por uth nos va a llevar al router auth*/}
            <Route path='/auth/*' element={<AuthRoutes/>}/>
        </Route>
        <Route>
            {/*JournalApp */}
            {/*Cualqueir otra ruta viene aquí y vamos a mostrar nuestro journal app */}
            <Route path='/*' element={<JournalRoutes/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter
