import { useEffect, useState } from "react";

const Paperino = (props)=>
{
    const [b,setB] = useState("aaaaa");

    //La fa partire SEMPRE 1 volta quando il componente viene graficato la prima volta
    //QUando il valore di una variabile nel vettore a riga 15 cambia
    //fai partire la funzione riga 11-14
    useEffect(
        ()=>
        {
            console.log("CIAOOOOOOO!!!!")
        },
        [b]
    );

    function cambiaB()
    {
        setB(Math.random());
    }

    return(
        <>
            <h1>{b}</h1>
            <button onClick={cambiaB}>CAMBIA B</button>
        </>
    );
}
export default Paperino;