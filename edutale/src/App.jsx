/*--- App.jsx ---*/ 

import {Routes, Route } from "react-router-dom"

import './App.css'
import Navigation from './Navigation/Navigation'
import Mainpage from "./Mainpage/Mainpage"
import CheckIn from './CheckIn/CheckIn'
import Inventory from "./Inventory/Inventory"
import Store from "./Store/Store"
import Settings from "./Settings/Settings"
import SkillList from "./SkillList/SkillList"

// Note: <Routes> element renders whatever element is contained in the selected Route.
export default function App() {
  return (
    <>
      <div id="modal-root"></div>
      <div className="navigation">
        <Navigation />
        <div>
          <Routes>
            <Route path="/" className="disabled-link" element={<Mainpage />} />
            <Route path="/check-in" className="disabled-link" element={<CheckIn />} />
            <Route path="/inventory" className="disabled-link" element={<Inventory />} />
            <Route path="/skill-list" className="disabled-link" element={<SkillList />} />
            <Route path="/store" className="disabled-link" element={<Store />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

