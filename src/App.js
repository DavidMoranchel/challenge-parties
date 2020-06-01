import React from "react";

// External dependencies
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from './pages/Home'
import TeamQuestions from "./pages/TeamQuestions";

// Components
// import ProgressBar from "./components/ProgressBar";

// CSS
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/team-questions">
            <TeamQuestions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// const questions = [
//   {
//     question:
//       "¿Que es un componente y cántos tipos de componentes existen? Explica diferencias",
//     progress: 10,
//   },
// ];

// const [team1, setTeam1] = useState(0);
// const [team2, setTeam2] = useState(0);
// const [team3, setTeam3] = useState(0);
// const [team4, setTeam4] = useState(0);
// const [counter, setCounter] = useState(0);
// const [currentTeam, setCurrentTeam] = useState(1);
// const [maxQuestions, setMaxQuestions] = useState(0);

// const handleClickSuccess = () => {
//   if (currentTeam === 1) {
//     setTeam1((team1) => team1 + questions[counter]["progress"]);
//   } else if (currentTeam === 2) {
//     setTeam2((team2) => team2 + questions[counter]["progress"]);
//   } else if (currentTeam === 3) {
//     setTeam3((team3) => team3 + questions[counter]["progress"]);
//   } else if (currentTeam === 4) {
//     setTeam4((team4) => team4 + questions[counter]["progress"]);
//   }

//   if (currentTeam === 4) {
//     setCurrentTeam(1)
//   } else {
//     setCurrentTeam(currentTeam => currentTeam + 1)
//   }

//   if (counter === questions.length - 1) {
//     setMaxQuestions(1);
//   } else {
//     setCounter((counter) => counter + 1);
//   }
// };

// const handleClickError = () => {
//   if (currentTeam === 4) {
//     setCurrentTeam(1);
//   } else {
//     setCurrentTeam((currentTeam) => currentTeam + 1);
//   }
// };

/* <div className="Container">
        {maxQuestions === 1 ? (
          <h3>Ganador!</h3>
        ) : (
          <>
            <h3>
              Pregunta{" "}
              {counter === questions.length - 1
                ? "Pregunta final"
                : counter + 1}{" "}
              <br /> {questions[counter]["question"]}
            </h3>
            <p>
              {questions[counter]["progress"]} puntos, Equipo {currentTeam}
            </p>
            <div className="Buttons-container">
              <button onClick={handleClickSuccess} className="success">
                Correcto
              </button>
              <button onClick={handleClickError} className="error">
                Error
              </button>
            </div>
          </>
        )}
      </div>
      <div className="Container">
        <ProgressBar
          progress={team1}
          teamTitle={"Equipo 1"}
          backgroundColor={"#1fc09b"}
        />
        <ProgressBar
          progress={team2}
          teamTitle={"Equipo 2"}
          backgroundColor={"#c0bb1f"}
        />
        <ProgressBar
          progress={team3}
          teamTitle={"Equipo 3"}
          backgroundColor={"#c01f8f"}
        />
        <ProgressBar
          progress={team4}
          teamTitle={"Equipo 4"}
          backgroundColor={"#1fc024"}
        />
      </div> */
