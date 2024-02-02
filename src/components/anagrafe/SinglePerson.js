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
    <div className="col-4 p-4">
      <div className="card text-center" >
        <div className="card-body">
          <h5 className="card-title">{props.pers.name} {props.pers.surname}</h5>
          <p className="card-text">My age is: {props.pers.age}</p>
          <input className="btn btn-primary me-3" type="button" value="MODIFICA" onClick={diAMioPadreDiModificarmi} />
          <input className="btn btn-danger" type="button" value="CANCELLA" onClick={diAMioPadreDiCancellarmi} />
        </div>
      </div>
    </div>
    </>

  );
}

export default SinglePerson;