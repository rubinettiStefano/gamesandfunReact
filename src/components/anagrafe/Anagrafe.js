import { useState } from "react";
import SinglePerson from "./SinglePerson";

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

  const [people,setPeople] = useState([

      {id:1,name:"Stefano",surname:"Rubinetti",age:28},
      {id:2,name:"Niko",surname:"Ricci",age:27},
      {id:3,name:"Giovanni",surname:"Di Pietrantonio",age:23}
    ]
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
