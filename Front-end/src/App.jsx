/*--- App.jsx ---*/ 

import skillGraph from './assets/skillGraph.png'
import avatar from './assets/avatar.gif'
import qIcon from './assets/cpp.png'
import OQIcon from './assets/html_icon.png'
import './App.css'

const USER = {
  name: 'akuri',
  avatar: {avatar}, /* require('./assets/avatar.gif') no work???? */
  level: 0.3,
  quests: ['HTML 1','HTML 2','HTML 3']
}

const QUESTS = [
  {qName: 'C++ 1', 
    img: {qIcon}, 
    exp: 20, 
    desc: 'A course to learn fundamentals of C++...',
    tags: ['Languages']}, /* same issue as ↑ */
  {qName: 'C++ 2', 
    img: {qIcon}, 
    exp: 30, 
    desc: 'A course to learn blah blah blah...',
    tags: ['Languages', 'Object-Oriented Programming']},
  {qName: 'C++ 3', 
    img: {qIcon}, 
    exp: 40, 
    desc: 'A course to learn blah blah blah...',
    tags: ['Languages', 'Object-Oriented Programming', 'Exception Handlling']}
]

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
          <p> {USER.quests[0]} </p>
            <img className='oQImg' src={OQIcon} alt="Ongoing Quest" />    
          </div>
          <div className="oQuest-item">
          <p> {USER.quests[1]} </p>
            <img className='oQImg' src={OQIcon} alt="Ongoing Quest" />    
          </div>
          <div className="oQuest-item">
            <p> {USER.quests[2]} </p>
            <img className='oQImg' src={OQIcon} alt="Ongoing Quest" />      
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
            <img className='qImg' src={qIcon} alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[0].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[0].tags[0]} </span>
            </h3>
            <p> {QUESTS[0].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src={qIcon} alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[1].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[1].tags[0]}</span> 
              <span className="tag"> {QUESTS[1].tags[1]} </span>
            </h3>
            <p> {QUESTS[1].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src={qIcon} alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[2].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[2].tags[0]}</span> 
              <span className="tag">{QUESTS[2].tags[1]}</span> 
              <span className="tag">{QUESTS[2].tags[2]} </span>
            </h3>
            <p> {QUESTS[2].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src={qIcon} alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[0].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[0].tags[0]} </span>
            </h3>
            <p> {QUESTS[0].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src={qIcon} alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[0].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[0].tags[0]} </span>
            </h3>
            <p> {QUESTS[0].desc} </p>
          </div>
        </div>
      </div>
    )
  };

}

