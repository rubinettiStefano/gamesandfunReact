const SinglePerson = (props)=>
{
  function changeAnything(e)
  {
    let newVersion = {...props.pers};
    console.log(e);
    newVersion[e.target.name]/*newVersion["age"] */ = e.target.value;
    props.updatePers(newVersion);
    //  props.setPers({...props.pers,newVersion[e.target.name]:e.target.value}); equivalente alle 3 sopra
  }

  return(
    <>
      <h1><input name='name' type='text' value={props.pers.name} onChange={changeAnything}/> <input name="surname" type='text' value={props.pers.surname} onChange={changeAnything}/></h1>
      <h2><input name='age' type='number' value={props.pers.age} onChange={changeAnything}/></h2>
    </>

  );
}

export default SinglePerson;