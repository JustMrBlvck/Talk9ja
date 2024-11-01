import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './SecondaryComponent/Header'

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
        
        </BrowserRouter>
          
    </div>
  )
}

export default Container