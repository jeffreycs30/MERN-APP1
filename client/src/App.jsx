import { useState,useEffect } from 'react'
import './App.css';
import './index.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import AddShipments from './components/AddShipments';
import EditShipments from './components/EditShipments';

function App() {

return (
<>
<BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addshipments" element={<AddShipments />} />
            <Route path="/editshipments/:id" element={<EditShipments />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>

</>
)
}
export default App