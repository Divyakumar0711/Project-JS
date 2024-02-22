import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hour, setHour] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let id = null;
    if (running) {
      id = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec === 5) {
            setMin((prevMin) => {
              if (prevMin === 2) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              } else {
                return prevMin + 1;
              }
            });
            return 0;
          } else {
            return prevSec + 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(id);
  }, [running]);
  const StartButton = () => {
    setRunning(true);
  };

  const StopButton = () => {
    setRunning(false);
  };
  const ResetButton = () => {
    setSec(0);
    setMin(0);
    setHour(0);
  };
  return (
    <div className="App">
      <p>
        {hour}:{min}:{sec}
      </p>
      <button onClick={StartButton}>Start</button>
      <button onClick={StopButton}>Stop</button>
      <button onClick={ResetButton}>Reset</button>
    </div>
  );
}

export default App;
