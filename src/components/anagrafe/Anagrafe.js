import { useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";
import axios from "axios";

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

  function updatePers(newVersion)
  {
    //1)trovo posizione della persona nel vettore grazie al suo id
    // let pos = -1;
    // for(let i=0;i<people.length;i++)
    //   if(people[i].id==newVersion.id)
    //     pos =i;
    let pos = people.findIndex(p=> p.id==newVersion.id);
    //2)clono il vettore
    let newPeopleVersion = [...people];
    //3)sovrascrivo la persona nel vettore clonato
    newPeopleVersion[pos]=newVersion;
    //sovrascrivo il vettore con il setter
    setPeople(newPeopleVersion);
  }

  return(
    <>
      {people.map(pers=><SinglePerson pers={pers} updatePers={updatePers}/>)}
    </>
  );

}
export default Anagrafe;//lo rendo pubblico
