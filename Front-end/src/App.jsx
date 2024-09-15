import skillGraph from './assets/skillGraph.png'
import avatar from './assets/avatar.gif'
import qIcon from './assets/cpp.png'
import './App.css'

const USER = {
  name: 'akuri',
  avatar: {avatar}, /* request('./assets/avatar.gif') no work???? */
  level: 0.3,
  quests: [
    {qName: 'HTML 1', 
      img: {qIcon}, 
      exp: 20, 
      desc: 'A course to learn fundamentals of HTML...',
      tags: 'lol'}, /* same issue as ↑ */
    {qName: 'HTML 2', 
      img: {qIcon}, 
      exp: 30, 
      desc: 'A course to learn blah blah blah...',
      tags: 'lol'},
    {qName: 'HTML 3', 
      img: {qIcon}, 
      exp: 40, 
      desc: 'A course to learn blah blah blah...',
      tags: 'lol'}
  ]
}

export default function App() {
  return (
    <>
      <div className="pane-container">
        <div className="pane-item">
          <Day />
          <Skillgraph />
          <Userbar />
          <div className="pane-2-container">
            <div className="pane-2-item">
              <Avatar />
            </div>
            <div className="pane-2-item">
              <OngoingQuests />
            </div>
          </div>
        </div>
        <div className="pane-item">
          <QuestBoard />
        </div>
      </div>
    </>
  );

  function Day() {
    return (
      <div className="day">
        <h1><u> Day 1 </u></h1>
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

  function Userbar() {
    return (
      <div className="userBar">
        <h2> {USER.name} <progress className="lBar" value={USER.level} /> </h2>
      </div>
    )
  };

  function Avatar() {
    return (
      /* want to use USER.avatar here ↓ but not working so uhhhh */
      <div className="avatar"> 
        <img className="aImg" src={avatar} alt="Avatar" />
      </div>
    )
  };

  function OngoingQuests() {
    return (
      <div className="oQuests">
        <h1> <u> Ongoing Quests </u></h1>
        <div className="oQuests-container">
          <div className="oQuest-item">
                1
          </div>
          <div className="oQuest-item">
                2
          </div>
          <div className="oQuest-item">
                3
          </div>
        </div>
      </div>
    )
  };

  function QuestBoard() {
    return (
      <div className="questBoard">
        <h1><u> Quest Board </u></h1>
        <div className="qBoard-container">
          <div className="qBoard-item">
            1
          </div>
          <div className="qBoard-item">
            2
          </div>
          <div className="qBoard-item">
            3
          </div>
          <div className="qBoard-item">
            4
          </div>
          <div className="qBoard-item">
            5
          </div>
        </div>
      </div>
    )
  };

}

