import { useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";
import axios from "axios";
import PersonForm from "./PersonForm";
import SinglePersonModifiable from "./SinglePersonModifiable";

const Anagrafe = ()=>
{
  
  const [people,setPeople] = useState([]);
  const [showForm,setShowForm] = useState(false);
  const [indexToModify,setIndex] = useState(-1);
  //init()
  useEffect(
    () =>
    {
      axios.get("/people").then(
        response =>
        {
          setPeople(response.data);
        }
      )
    },
    []
  );

  function notifyFather(pers)
  {
    let clone = [...people];
    clone.push(pers);
    setPeople(clone);
  }

  function padreHoModificatoQuestaPersona(pers)
  {
    let clone = [...people];
    let pos = clone.findIndex(p=>p.id==pers.id);
    clone[pos] = pers;
    setPeople(clone);
  }


  function diAMioPadreDiCancellarmi(ind)
  {
    let clone = [...people];
    let personToDelete = clone[ind];
    let id = personToDelete.id;
    axios.delete(`/people/${id}`);
    clone.splice(ind,1);//rimuove, a partire dall'indice ind, 1 elemento
    setPeople(clone);
  }

  function rendiFiglioAllaPosizioneModificabile(ind)
  {
      setIndex(ind);
  }
  function annullaModifiche()
  {
    setIndex(-1);
  }


  function toggleForm()
  {
    let newShowForm = !showForm;//inverte il booleano
    setShowForm(newShowForm);
  }
  return(
    <>
      <div className="row justify-content-center">
        <button className="col-1" onClick={toggleForm} > 
          { 
              !showForm   ? 
              <img width={50} height={50} src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ55G7DUmQAh_Y5pBaCZ2FSKRTtgvkgUeptxRQjFOcadJW34oHyt6c-RIJHxajeOD_-"/> :
              <img width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHJeYuLS5xUCWSsSyGnKtgMbL417vXNv8Sw&usqp=CAU"/>
          }</button>
      </div>
      {showForm &&<PersonForm notifyFather={notifyFather} />}
      <div className="row">
        {people.map((pers,i)=>i==indexToModify ?  <SinglePersonModifiable padreHoModificatoQuestaPersona={padreHoModificatoQuestaPersona} annulla={annullaModifiche} pers={pers} />   : <SinglePerson pers={pers} index={i} update={rendiFiglioAllaPosizioneModificabile} delete={diAMioPadreDiCancellarmi}/>)}
      </div>
    </>
  );

}
export default Anagrafe;//lo rendo pubblico
