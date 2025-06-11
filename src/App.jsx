import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import roosterLogo from "./assets/r5.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Merhaba React</h1>
      <img src={roosterLogo} className="logo rooster" alt="rooster logo" />
      <p>Reacte Başlıyoruz</p>
      <hr />
      <h3>Yeni Kodlar Geliyor</h3>
    </>
  );
}

export default App;
