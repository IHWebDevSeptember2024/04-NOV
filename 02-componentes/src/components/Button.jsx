import "./Button.css";

function Button(props) {
  // lo que me llega es un objeto con el contenido de todas las propiedades que estoy mandando a este componente desde el padre (App.jsx)
  console.log("Este es en console.log de ditto : ", props);

  return <button className="btn">{props.text}</button>;
}

export default Button;
