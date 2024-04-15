import * as React from 'react';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Customer from './components/Customer';
import Inventory from './components/Inventory';
import SalesReport from './components/SalesReport';
import Overview from './components/Overview';
import Nav from './components/Navbar';
function App() {

  return (
    <BrowserRouter> 
    <Nav/>
    <Routes>
     <Route path='/' element={<Overview/>}></Route>
      <Route path='/Customer' element={<Customer/>}></Route>
      <Route path='Inventory' element={<Inventory/>}></Route>
      <Route path='SalesReport' element={<SalesReport/>}></Route>
      
    </Routes>
    </BrowserRouter>
   
  );
}
export default App;