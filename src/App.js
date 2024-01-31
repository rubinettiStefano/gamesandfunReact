import "w3-css/w3.css";
import Anagrafe from "./components/anagrafe/Anagrafe";
import Calcolatrice from "./components/calcolatrice/Calcolatrice";
import { useState } from "react";
import Paperino from "./components/paperino/Paperino";

function App() {
  
  const [showAnagrafe,setShowAnagrafe] = useState(true);
  const [showCalcolatrice,setShowCalcolatrice] = useState(false);
  const [showPaperino,setShowPaperino] = useState(false);

  function mostraSolo(e)
  {
    setShowAnagrafe(false);
    setShowCalcolatrice(false);
    setShowPaperino(false);
    let nomeComponente = e.target.name;

    switch (nomeComponente) 
    {
      case "anagrafe":
        setShowAnagrafe(true);
      break;
      case "calcolatrice":
        setShowCalcolatrice(true);
      break;
      case "paperino":
        setShowPaperino(true);
      break;
    }
  }

 

  return (
    
    <>
      {/* style="background-color:blue;color:white" */}
      <button style={{color:"white",backgroundColor:"blue"}}  name="anagrafe" className="w3-button" onClick={mostraSolo}>ANAGRAFE</button>
      <button name="calcolatrice" className="w3-button" onClick={mostraSolo}>CALCOLATRICE</button>
      <button name="paperino" className="w3-button" onClick={mostraSolo}>Paperino</button>

      <br/><br/>
      {/* if(showAnagrafe) mostra componente Anagrafe */}
      {showAnagrafe && <Anagrafe />}
      {showCalcolatrice &&<Calcolatrice />}
      {showPaperino &&<Paperino />}
    </>
  );
}

export default App;