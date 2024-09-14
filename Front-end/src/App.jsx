import skillGraph from './assets/skillGraph.png'
import './App.css'

export default function App() {
  return (
    <>
      <div class="pane-container">
        <div class="pane-item">
          <Day />
          <Skillgraph />
        </div>
        <div class="pane-item">

        </div>
      </div>
    </>
  );

  function Day() {
    return (
      <div className="day">
        <h1>
          <u>
            Day 1
          </u>
        </h1>
      </div>
    )
  };

  function Skillgraph() {
    return (
      <div className="sGraph">
        <img src={skillGraph} alt="Skill Graph" />
      </div>
    )
  };
}

