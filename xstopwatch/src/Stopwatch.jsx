import React, { useRef, useState } from 'react'

function Stopwatch() {
  
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] =  useState(0);
  const intervalRef = useRef(null);

  function format(){
     
    let min = Math.trunc(elapsed/60);
    let sec =  elapsed%60;
    return `Time: ${min}:${sec <10 ? "0":""}${sec}`
  }
  
  function reset(){
     clearInterval(intervalRef.current);
    setElapsed(0);
    setIsRunning(false);
  }

  function startStop(){
      if(isRunning){
         clearInterval(intervalRef.current);

         setIsRunning(false);
      }
      else{
         
         setIsRunning(true);
         intervalRef.current  = setInterval(()=>{
             setElapsed((prev)=> prev+1 );
         }, 1000);
      }
  }


  return (
    <div>
      <h1>Stopwatch</h1>
      <h3>{format()}</h3>
      <button onClick={startStop}>{isRunning? "Stop": "Start"}</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Stopwatch