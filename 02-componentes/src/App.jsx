import ditto from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Navbar />
      <Button text="Botón 1" otraCosa="lo que sea"/>
      <Button text="Otro contenido" />
      <img src={ditto} className="logo" alt="Vite logo" />
      <ul>
        <li>hola</li>
        <li>otra</li>
        <li>ul</li>
      </ul>
      <img src={viteLogo} className="logo" alt="React logo" />
    </>
  );
}

export default App;
