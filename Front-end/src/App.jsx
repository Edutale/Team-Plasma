/*--- App.jsx ---*/ 

import {Routes, Route } from "react-router-dom"

import './App.css'
import Navigation from './Navigation/Navigation'
import Mainpage from "./Mainpage/Mainpage"
import CheckIn from './CheckIn/CheckIn'
import Inventory from "./Inventory/Inventory"
import SkillTree from "./SkillTree/SkillTree"
import Settings from "./Settings/Settings"

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

