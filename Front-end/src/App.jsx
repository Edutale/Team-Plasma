/*--- App.jsx ---*/ 

import {Routes, Route } from "react-router-dom"

import skillGraph from './assets/skillGraph.png'
import avatar from './assets/avatar.gif'
import qIcon from './assets/cpp.png'
import OQIcon from './assets/html_icon.png'

import './App.css'
import Navigation from './Navigation/Navigation'
import Mainpage from "./Mainpage/Mainpage"
import CheckIn from './CheckIn/CheckIn'
import Inventory from "./Inventory/Inventory"
import SkillTree from "./SkillTree/SkillTree"
import Settings from "./Settings/Settings"

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

// Note: <Routes> element renders whatever element is contained in the selected Route.
export default function App() {
  return (
    <>
      <div className="navigation">
        <Navigation />
        <div>
          <Routes>
            <Route path="/" className="disabled-link" element={<Mainpage />} />
            <Route path="/check-in" className="disabled-link" element={<CheckIn />} />
            <Route path="/inventory" className="disabled-link" element={<Inventory />} />
            <Route path="/skill-tree" className="disabled-link" element={<SkillTree />} />
            <Route path="/settings" className="disabled-link" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

