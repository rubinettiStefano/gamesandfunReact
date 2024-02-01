const SinglePerson = (props)=>
{

  function diAMioPadreDiModificarmi()
  {
    props.update(props.index)
  }

  function diAMioPadreDiCancellarmi()
  {
    props.delete(props.index)
  }

  return(
    <>
    <div className="w3-card-4 w3-col m4 l4 w3-center">
      <h1>{props.pers.name} {props.pers.surname} </h1>
      <h2>{props.pers.age} </h2> 
      <input class="w3-button" type="button" value="MODIFICA" onClick={diAMioPadreDiModificarmi} />
      <input class="w3-button" type="button" value="CANCELLA" onClick={diAMioPadreDiCancellarmi} />
    </div>
    </>

  );
}

export default SinglePerson;