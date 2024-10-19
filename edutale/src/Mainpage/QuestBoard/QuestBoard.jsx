import * as myJson from "../../QUESTS.json"
import QuestRow from './QuestRow'
import React, { useState, useEffect } from "react"
import Axios from "axios"
import "./QuestBoard.css"

let QUESTS = myJson["quests"]
/* Left the first quest row using data variables and the rest with strings 
 * to reflect both functionalities.  Changing to pull from database in future.*/
export default function QuestBoard() {
    return (
      <div className="questBoard">
        <h1><u> Quest Board </u></h1>
        <div className="qBoard-container">
          <button className="row-button"><QuestRow img={QUESTS[0].img} qName={QUESTS[0].qName} desc={QUESTS[0].desc} /></button>
          <button className="row-button"><QuestRow img="../../assets/cpp.png" qName="C++2" desc="A course to learn more fundamentals of C++..." /></button>
          <button className="row-button"><QuestRow img="../../assets/cpp.png" qName="C++3" desc="A course to master C++..." /></button>
          <button className="row-button"><QuestRow img="../../assets/cpp.png" qName="C++1" desc="A course to learn LOL fundamentals of C++..." /></button>
          <button className="row-button"><QuestRow img="../../assets/cpp.png" qName="C++1" desc="A course to learn LOL fundamentals of C++..." /></button>
        </div>
      </div>
    )
};