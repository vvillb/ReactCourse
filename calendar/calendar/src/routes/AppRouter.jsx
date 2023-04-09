import {Routes, Route} from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage';
import CalendarApp from '../CalendarApp';

const AppRouter = () => {
    const authStatus='not-authenticated';
  return (
    <Routes>
      {/*
        (authStatus==='not-authenticated')
  */}
      <Route path='/auth/*' element={<LoginPage/>}/>
      <Route path='/*' element={<CalendarApp/>}/>

    </Routes>
  )
}
export default AppRouter;


