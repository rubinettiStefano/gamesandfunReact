import { useState } from "react";
import NumeroInput from "./NumeroInput";

const Calcolatrice = ()=>
{
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [result,setNumResult] = useState(0);
  function somma()
  {
    setNumResult(num1+num2);
  }

  function sottrazione()
  {
    setNumResult(num1-num2);
  }

  function moltiplicazione()
  {
    setNumResult(num1*num2);
  }

  function divisione()
  {
    setNumResult(num1/num2);
  }

  function reset()
  {
    setNum1(0);
    setNum2(0);
    setNumResult(0);
  }

  function esponenziale()
  {
    // let res = num1;
    // for(let i=1;i<num2;i++)
    //   res*=num1;
    // setNumResult(res);
    setNumResult(Math.pow(num1,num2));
  }

  function resto()
  {
    setNumResult(num1%num2);
  }

  function dammiStudenteCasuale()
  {
    return parseInt(Math.random()*26);
  }

  return(
    <>
    <div className='w3-row'>
     <NumeroInput num={num1} setNum={setNum1}/>
     <NumeroInput num={num2} setNum={setNum2}/>
    </div>
    <div className='w3-center'>
      <input className='w3-button' type='button' value="AC"  onClick={reset}/>
      <input className='w3-button' type='button' value="+"  onClick={somma}/>
      <input className='w3-button' type='button' value="-"  onClick={sottrazione}/>
      <input className='w3-button' type='button' value="X"  onClick={moltiplicazione}/>
      <input className='w3-button' type='button' value="/"  onClick={divisione}/>
      <input className='w3-button' type='button' value="^"  onClick={esponenziale}/>
      <input className='w3-button' type='button' value="%"  onClick={resto}/>
      <h1 >{result}</h1>
    </div>
    {/* <h1 className='w3-red w3-center'>{dammiStudenteCasuale()}</h1> */}
    </>
  );
}
export default Calcolatrice;