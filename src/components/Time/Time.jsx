import { useEffect, useState } from "react";

function Time() {
  const [ date, setDate ] = useState( new Date() );
  const hours = date.getHours();
  const minutes = date.getMinutes()

  const callMeTime = () => {
    setInterval( () => {
      setDate( new Date() );
    }, 1000 );
  };

  useEffect(()=>{
    callMeTime()
  },[date])

  return (
    <div className="header__time">
      {
        // date.toLocaleTimeString()
        <span>{hours}:{minutes}</span>
      }
    </div>
  );
}

export default Time;

