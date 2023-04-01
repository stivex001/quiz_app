import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ setcurrentQuestion, currentQuestion }) => {
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      return setcurrentQuestion(currentQuestion + 1);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setcurrentQuestion]);

  useEffect(() => {
    setTimer(30);
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion > 8) {
      navigate("/result");
    }
  }, [currentQuestion]);

  return timer;
};

export default Timer;
