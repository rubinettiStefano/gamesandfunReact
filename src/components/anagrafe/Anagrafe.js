import { useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";
import axios from "axios";
import PersonForm from "./PersonForm";
import SinglePersonModifiable from "./SinglePersonModifiable";
import { useNavigate } from "react-router-dom";

const Anagrafe = ()=>
{
  let navigate = useNavigate();
  const [people,setPeople] = useState([]);
  const [showForm,setShowForm] = useState(false);
  const [indexToModify,setIndex] = useState(-1);
  const [peopleToShow,setPeopleToShow] = useState([]);

  const [searchKey,setSearchKey] = useState("");
  //init()
  useEffect(
    () =>
    {
      axios.get("/people").then(
        response =>
        {
          setPeople(response.data);
          setPeopleToShow(response.data);
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
    setPeopleToShow(clone);
    navigate("/calcolatrice");
  }

  function padreHoModificatoQuestaPersona(pers)
  {
    let clone = [...people];
    let pos = clone.findIndex(p=>p.id==pers.id);
    clone[pos] = pers;
    setPeople(clone);
  }


  function diAMioPadreDiCancellarmi(id)
  {
    let clone = [...people];
    let pos = clone.findIndex(p=>p.id==id);
    axios.delete(`/people/${id}`);
    clone.splice(pos,1);//rimuove, a partire dall'indice ind, 1 elemento
    setPeople(clone);
    setPeopleToShow(clone);
    setSearchKey("");
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

  function filterPeople(e)
  {
    let key =e.target.value; 
    setSearchKey(key);
    filterPeopleByKey(key);
  }

  function filterPeopleByKey(key)
  {
    if(key || key==="")
      setPeopleToShow(people.filter(p=> p.name.toLowerCase().includes(key.toLowerCase()) || p.surname.toLowerCase().includes(key.toLowerCase())  ));
    else
      setPeopleToShow(people.filter(p=> p.name.toLowerCase().includes(searchKey.toLowerCase()) || p.surname.toLowerCase().includes(searchKey.toLowerCase())  ));

  }

  function clearFilter()
  {
    setPeopleToShow(people);
    setSearchKey("");
  }

  return(
    <>
      <div className="row">
        <div className="col-3 ps-4">
          <div className="input-group mb-3">
            <input value={searchKey} onChange={filterPeople} type="text" className="form-control" placeholder="Nome/Cognome" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button onClick={clearFilter} className="btn btn-outline-secondary" type="button" id="button-addon2">X</button>
          </div>
        </div>
        <button className="col-1 offset-2" onClick={toggleForm} > 
          { 
              !showForm   ? 
              <img width={50} height={50} src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ55G7DUmQAh_Y5pBaCZ2FSKRTtgvkgUeptxRQjFOcadJW34oHyt6c-RIJHxajeOD_-"/> :
              <img width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHJeYuLS5xUCWSsSyGnKtgMbL417vXNv8Sw&usqp=CAU"/>
          }</button>
      </div>
      {showForm &&<PersonForm notifyFather={notifyFather} />}
      <div className="row">
        {peopleToShow.map((pers,i)=>i==indexToModify ?  <SinglePersonModifiable key={pers.id}  padreHoModificatoQuestaPersona={padreHoModificatoQuestaPersona} annulla={annullaModifiche} pers={pers} />   : <SinglePerson key={pers.id} pers={pers} index={i} update={rendiFiglioAllaPosizioneModificabile} delete={diAMioPadreDiCancellarmi}/>)}
      </div>
    </>
  );

}
export default Anagrafe;//lo rendo pubblico
