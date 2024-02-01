import { useState } from "react";
import axios from "axios";
const SinglePersonModifiable = (props)=>
{
    const [pMod,setPMod] = useState(props.pers);

    function synchronize(e)
    {
        let clone = {...pMod};
        clone[e.target.name] = e.target.value;
        setPMod(clone);
        
    }

    function sendForm()
    {
        axios.put(`/people/${pMod.id}`,pMod).then(
            (response)=>
            {
                props.padreHoModificatoQuestaPersona(response.data);
                props.annulla();
            }
        )
    }


    return(
        <>
        
        <div className="w3-card-4 w3-col m4 l4 w3-center">
            <form   class="w3-container">

                <label>First Name</label>
                <input name="name" class="w3-input" type="text" value={pMod.name} onChange={synchronize} />

                <label>Last Name</label>
                <input name="surname" class="w3-input" type="text" value={pMod.surname} onChange={synchronize} />

                <label>Age</label>
                <input name="age" class="w3-input" type="number" value={pMod.age} onChange={synchronize} />

                <input class="w3-button" type="button" value="Salva"  onClick={sendForm}/><input class="w3-button" type="button" value="ANNULLA" onClick={props.annulla} />
            </form>
        </div>
        </>

    );
}

export default SinglePersonModifiable;