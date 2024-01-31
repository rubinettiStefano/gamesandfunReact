const NumeroInput = (props)=>
{
  

  function aumentaDiUno()
  {
    props.setNum(props.num+1);
  }

  function diminuisciDiUno()
  {
    props.setNum(props.num-1);
  }

  function changeNum(e) //evento
  {
    console.log(e);
    let nuovoValore = parseInt(e.target.value);
    props.setNum(nuovoValore);
  }

  return(
    <>
     <div className=' w3-center w3-col m6 l6'>
        <input className='w3-center' type='number' value={props.num} onChange={changeNum}/><br/>
        <input className='w3-button w3-text-red' type='button' value="-" onClick={diminuisciDiUno} />
        <input className='w3-button w3-text-green' type='button' value="+"  onClick={aumentaDiUno}/>
      </div>
    </>
  );

}
export default NumeroInput;