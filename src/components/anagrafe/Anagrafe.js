import { useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";
import axios from "axios";
import PersonForm from "./PersonForm";

const Anagrafe = ()=>
{
  // const [name1,setName1] = useState("Stefano");
  // const [surname1,setSurname1] = useState("Rubinetti");
  // const [age1,setAge1] = useState(28);

  // const [name2,setName2] = useState("Niko");
  // const [surname2,setSurname2] = useState("Ricci");
  // const [age2,setAge2] = useState(27);

  // const [pers1,setPers1] = useState({name:"Stefano",surname:"Rubinetti",age:28});
  // const [pers2,setPers2] = useState({name:"Niko",surname:"Ricci",age:27});

  //Tutto quello che vedete iniziare con use, useState
  //viene detto HOOK
  //ha un comportamento diverso da tutto il resto che viene gestito da react
  const [people,setPeople] = useState([]);
  const [showForm,setShowForm] = useState(false);
  //init()
  useEffect(
    () =>
    {
      //leggo da back-end e imposto valore dello state
      //fa una chiamata get a url tra tonde
      //se mettiamo lo slash è come scrive base-url/people
      //base-url = il proxy ( o quello vero se no proxy)
      //una chiamata GET a http://localhost:8080
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

  function toggleForm()
  {
    let newShowForm = !showForm;//inverte il booleano
    setShowForm(newShowForm);
  }
  return(
    <>
      <button onClick={toggleForm} > {!showForm ? "Mostra Form" : "Nascondi Form"}</button>
      {showForm &&<PersonForm notifyFather={notifyFather} />}
      {people.map(pers=><SinglePerson pers={pers} />)}
    </>
  );

}
export default Anagrafe;//lo rendo pubblico
