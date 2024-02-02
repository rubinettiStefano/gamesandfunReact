import "w3-css/w3.css";
import "bootstrap/dist/css/bootstrap.css"
import Anagrafe from "./components/anagrafe/Anagrafe";
import Calcolatrice from "./components/calcolatrice/Calcolatrice";
import { useState } from "react";
import Paperino from "./components/paperino/Paperino";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";



function App() {
  

 

  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* va a localhost:3000/anagrafe */}
          <Route index element={<Homepage />} />
          <Route path="anagrafe" element={<Anagrafe />} />
          <Route path="calcolatrice" element={<Calcolatrice />} />
          <Route path="paperino" element={<Paperino />} />
        </Routes>
      </BrowserRouter>


    {/* <button style={{color:"white",backgroundColor:"blue"}}  name="anagrafe" className="w3-button" onClick={mostraSolo}>ANAGRAFE</button>
    <button name="calcolatrice" className="w3-button" onClick={mostraSolo}>CALCOLATRICE</button>
    <button name="paperino" className="w3-button" onClick={mostraSolo}>Paperino</button>

    <br/><br/>
    {showAnagrafe && <Anagrafe />}
    {showCalcolatrice &&<Calcolatrice />}
    {showPaperino &&<Paperino />} */}
    </>
  );
}

export default App;