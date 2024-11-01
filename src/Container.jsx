import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../UI/SecondaryComponent/Header'

function Container() {
  return (
    <div>

        <BrowserRouter>
           
          <Header/>
       

           <Routes>

                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>

           </Routes>

               {/* <Footer/> */}
        
        </BrowserRouter>
          
    </div>
  )
}

export default Container