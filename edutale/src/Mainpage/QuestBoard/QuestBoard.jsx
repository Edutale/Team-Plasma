import * as myJson from "../../QUESTS.json"
import QuestRow from './QuestRow'
import React, { useState, useEffect } from "react"
import Axios from "axios"
import "./QuestBoard.css"

let QUESTS = myJson["quests"]

export default function QuestBoard() {
    return (
      <div className="questBoard">
        <h1><u> Quest Board </u></h1>
        <div className="qBoard-container">
          <QuestRow img="../../assets/cpp.png" qName="C++1" desc="A course to learn fundamentals of C++..." />
          <QuestRow img="../../assets/cpp.png" qName="C++2" desc="A course to learn more fundamentals of C++..." />
          <QuestRow img="../../assets/cpp.png" qName="C++3" desc="A course to master C++..." />
          <QuestRow img="../../assets/cpp.png" qName="C++1" desc="A course to learn LOL fundamentals of C++..." />
          <QuestRow img="../../assets/cpp.png" qName="C++1" desc="A course to learn LOL fundamentals of C++..." />
        </div>
      </div>
    )
};