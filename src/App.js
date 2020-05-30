import React, { useState } from "react";
import "./App.css";

// Components
import ProgressBar from "./components/ProgressBar";

const questions = [
  {
    question: "¿Cual es la palabra reservada para la herencia en JS? Explica Herencia",
    progress: 10,
  },
  {
    question: "Explica useEffect",
    progress: 10,
  },
  {
    question: "¿Que es un componente y cántos tipos de componentes existen? Explica diferencias",
    progress: 10,
  },
  {
    question: "¿Quién lanzo al mundo React JS?",
    progress: 5,
  },
  {
    question: "¿Cómo hacemos funcionar un input en React?",
    progress: 10,
  },
  {
    question: "¿De que maneras ponemos dar acceso del contexto de la clase a un methodo?",
    progress: 10,
  },
  {
    question: "¿Qué es React JS?",
    progress: 5,
  },
  {
    question: "Explica useState",
    progress: 10,
  },
  {
    question: "¿Cuál es el orden de ejecución de el lifecycle de los componentes?",
    progress: 10,
  },
  {
    question: "¿Menciona los tipos de componentes que nos proporciona Reat Router DOM?",
    progress: 10,
  },
  {
    question: "",
    progress: 10,
  },
];

function App() {
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);
  const [team3, setTeam3] = useState(0);
  const [team4, setTeam4] = useState(0);
  const [counter, setCounter] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [maxQuestions, setMaxQuestions] = useState(0);

  const handleClickSuccess = () => {
    if (currentTeam === 1) {
      setTeam1((team1) => team1 + questions[counter]["progress"]);
    } else if (currentTeam === 2) {
      setTeam2((team2) => team2 + questions[counter]["progress"]);
    } else if (currentTeam === 3) {
      setTeam3((team3) => team3 + questions[counter]["progress"]);
    } else if (currentTeam === 4) {
      setTeam4((team4) => team4 + questions[counter]["progress"]);
    }

    if (currentTeam === 4) {
      setCurrentTeam(1)
    } else {
      setCurrentTeam(currentTeam => currentTeam + 1)
    }

    if (counter === questions.length - 1) {
      setMaxQuestions(1);
    } else {
      setCounter((counter) => counter + 1);
    }
  };

  const handleClickError = () => {
    if (currentTeam === 4) {
      setCurrentTeam(1);
    } else {
      setCurrentTeam((currentTeam) => currentTeam + 1);
    }
  };

  return (
    <div className="App">
      <div className="Container">
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
      </div>
    </div>
  );
}

export default App;
