import "./App.css";

function App() {
  // FUNCTIONAL COMPONENT
  const miH2 = <h2>Hola</h2>;

  const userName = "Marcel";

  const user = {
    name: "Valentina",
    role: "Career advisor",
    age: 25,
  };

  const array = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Hannah",
    "Ivy",
    "Jack",
  ];

  const arrayWithElements = [
    <li>Eva</li>,
    <li>Bob</li>,
    <li>Charlie</li>,
    <li>David</li>,
    <li>Alice</li>,
    <li>Frank</li>,
    <li>Grace</li>,
    <li>Hannah</li>,
    <li>Ivy</li>,
    <li>Jack</li>,
  ];

  const newArray = array.map((name) => {
    return <li>{name}</li>;
  });

  /* 
  // EJEMPLO CON FOREACH
  const newArray2 = [];

  array.forEach((name) => {
    newArray2.push(<li>{name}</li>);
  });
  // no me gusta 😓
 */
  return (
    <>
      {/*FRAGMENT*/}
      <h1>Hola {user.name}!</h1>
      {miH2}
      <p>Age: {user.age * 23}</p>
      <h4>Esto es array de strings:</h4>
      {array}
      <h4>Este es el array con lis:</h4>
      <ul>{arrayWithElements}</ul>
      <h4>ESTE ES EL NEW ARRAY (con un map):</h4>
      <ol>{newArray}</ol>
    </>
  );
}

export default App;
