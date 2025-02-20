import reactLogo from "./assets/react.svg";
import "./App.css";
import moment from "moment";
import { format } from "date-fns";
import { Button } from "@janiscommerce/ui-web";
import Mapa from "./Mapa";
const App = () => {
  const date = "2020-12-31T18:18:43.928Z";
  const formato = "dddd";

  const now = new Date();

  const formater = (date, formatString, options = {}) =>
    format(new Date(date), formatString, options);

  const testingFunction = () => {
    try {
      return formater(date, formato);
    } catch (error) {
      return error.message;
    }
  };
  const aca = testingFunction() ?? "hola";
  console.log("aca", aca);

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>JS tester</h1>
      <form action="">
        <input type="text" />
        <Button>Hola</Button>
      </form>
      <Mapa />
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <button>{`date-fns => ${testingFunction()}`}</button>
        <button>{`moment => ${moment(date).format(formato)}`}</button>
        <button>{`now => ${now}`}</button>
        {/*<button>{`sum => ${sum(valores)}`}</button>
        <button>{`sumJS => ${sumJS(valores)}`}</button>
         <button>{`sum2 => ${sum2(valores)}`}</button> */}
      </div>
    </>
  );
};

export default App;
