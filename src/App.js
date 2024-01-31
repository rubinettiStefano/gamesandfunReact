import "w3-css/w3.css";
import Anagrafe from "./components/anagrafe/Anagrafe";
import Calcolatrice from "./components/calcolatrice/Calcolatrice";
import { useState } from "react";

function App() {
  
  const [showAnagrafe,setShowAnagrafe] = useState(true);
  const [showCalcolatrice,setShowCalcolatrice] = useState(false);

  function mostraSolo(e)
  {
    setShowAnagrafe(false);
    setShowCalcolatrice(false);
    let nomeComponente = e.target.name;

    switch (nomeComponente) 
    {
      case "anagrafe":
        setShowAnagrafe(true);
      break;
      case "calcolatrice":
        setShowCalcolatrice(true);
      break;
    }
  }

 

  return (
    
    <>
      <button name="anagrafe" className="w3-button" onClick={mostraSolo}>ANAGRAFE</button>
      <button name="calcolatrice" className="w3-button" onClick={mostraSolo}>CALCOLATRICE</button>
      <br/><br/>
      {/* if(showAnagrafe) mostra componente Anagrafe */}
      {showAnagrafe && <Anagrafe />}
      {showCalcolatrice &&<Calcolatrice />}
    </>
  );
}

export default App;