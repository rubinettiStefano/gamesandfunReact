import { useState } from "react";
import axios from "axios";
const PersonForm = (props)=>
{
    const [pers,setPers] = useState({
        name:"",
        surname:"",
        age:""

    });


    function sendForm()
    {
        axios.post("/people",pers).then(
            (response)=>
            {
                props.notifyFather(response.data);//devo dire a mio padre, a componente anagrafe, che c'è una nuova persona
                //e che la deve aggiungere al suo vettore di persone, se no non verrà graficata
                setPers({
                    name:"",
                    surname:"",
                    age:""
                });//RIPULISCO I CAMPI
            }
        )//questo manda una post avente come body pers JSONIZZATO
    }


    function synchronize(e)
    {
        let clone = {...pers};
        clone[e.target.name] = e.target.value;
        setPers(clone);
        
    }


    return(
        <>
            <form   class="w3-container">

                <label>First Name</label>
                <input name="name" class="w3-input" type="text" value={pers.name} onChange={synchronize} />

                <label>Last Name</label>
                <input name="surname" class="w3-input" type="text" value={pers.surname} onChange={synchronize} />

                <label>Age</label>
                <input name="age" class="w3-input" type="number" value={pers.age} onChange={synchronize} />

                <input class="w3-button" type="button" value="Salva"  onClick={sendForm}/>
            </form>
        </>

    );
}

export default PersonForm;