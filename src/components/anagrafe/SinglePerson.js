const SinglePerson = (props)=>
{

  return(
    <>
      <h1>{props.pers.name} {props.pers.surname} </h1>
      <h2>{props.pers.age} </h2>
    </>

  );
}

export default SinglePerson;