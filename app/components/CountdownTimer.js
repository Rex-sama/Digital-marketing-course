import { useEffect, useState } from "react";
import CountBox from "./CountBox";
import { formatNumber } from "../utils/validations";

const CountdownTimer = ({ timesUp, setTimesUp }) => {
  const calculateTimeLeft = () => {
    const deadline = new Date("2024-06-15");
    const now = new Date();
    const difference = deadline - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (Object.keys(timeLeft).length == 0) {
      setTimesUp(true);
      clearInterval(timer);
    } else {
      setTimesUp(false);
    }
    return () => clearInterval(timer);
  }, []);


  return (
    <div>
      {!timesUp && (
        <h1 className="text-center mb-2 text-lg font-extrabold text-green-100">
          Last Chance to Enroll! Timer Ends in
        </h1>
      )}
      <div className="flex space-x-2 text-lg text-black">
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <CountBox time={timeLeft.days} label={"Days"} />
            <CountBox time={formatNumber(timeLeft.hours)} label={"Hours"} />
            <CountBox time={formatNumber(timeLeft.minutes)} label={"Minutes"} />
            <CountBox time={formatNumber(timeLeft.seconds)} label={"Seconds"} />
          </>
        ) : (
          <h1 className="text-center w-full font-bold text-red-800">
            Registration Closed
          </h1>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
