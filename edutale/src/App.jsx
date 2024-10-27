/*--- App.jsx ---*/ 

import {Routes, Route} from "react-router-dom"

import "./App.css"
import Welcome from "./Welcome/Welcome"
import Mainpage from "./Mainpage/Mainpage"
import CheckIn from "./CheckIn/CheckIn"
import Inventory from "./Inventory/Inventory"
import Resume from "./Resume/Resume"
import Settings from "./Settings/Settings"
import SkillGallery from "./SkillGallery/SkillGallery"
import Admin from "./Admin/Admin"

// Note: <Routes> element renders whatever element is contained in the selected Route.
export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/welcome" className="disabled-link" element={<Welcome />} />
          <Route path="/" className="disabled-link" element={<Mainpage />} />
          <Route path="/check-in" className="disabled-link" element={<CheckIn />} />
          <Route path="/inventory" className="disabled-link" element={<Inventory />} />
          <Route path="/skill-list" className="disabled-link" element={<SkillGallery />} />
          <Route path="/resume" className="disabled-link" element={<Resume />} />
          <Route path="/settings" className="disabled-link" element={<Settings />} />
          <Route path="/admin" className="disabled-link" element={<Admin />} />
        </Routes>
      </div>
      
    </>
  );
}

