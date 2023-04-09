import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";



function CalendarApp() {
  return (
    
    
  <BrowserRouter>
    <AppRouter router={BrowserRouter}/>
  </BrowserRouter> 
    
  )
}
export default CalendarApp



