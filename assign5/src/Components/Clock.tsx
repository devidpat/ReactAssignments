import React, { useEffect, useState } from 'react';
import '../styles/Clock.css';
const Clock = () => {
  const [currTime, setCurrTime] = useState({
    hours: new Date(Date.now()).getHours(),
    minutes: new Date(Date.now()).getMinutes(),
    seconds: new Date(Date.now()).getSeconds(),
  });
  useEffect(() => {
    setInterval(() => {
      setCurrTime({
        hours: new Date(Date.now()).getHours(),
        minutes: new Date(Date.now()).getMinutes(),
        seconds: new Date(Date.now()).getSeconds(),
      });
    }, 1000);
    console.log(currTime.hours, currTime.minutes, currTime.seconds);
    // return () => {
    // 	clearInterval(timer);
    // };
  }, []);
  return (
    <div className="clock">
      <span>{currTime.hours} : </span>
      <span>{currTime.minutes} : </span>
      <span>{currTime.seconds}</span>
    </div>
  );
};

export default Clock;
