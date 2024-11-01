/*--- App.jsx ---*/ 

import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

import Welcome from "./Welcome/Welcome"
import Mainpage from "./Mainpage/Mainpage"
import CheckIn from "./CheckIn/CheckIn"
import Inventory from "./Inventory/Inventory"
import Resume from "./Resume/Resume"
import Settings from "./Settings/Settings"
import SkillGallery from "./SkillGallery/SkillGallery"
import Admin from "./Admin/Admin"

import "./App.css"

// Note: <Routes> element renders whatever element is contained in the selected Route.

// A ProtectedRoute is a path that the user must be logged in to access.
const ProtectedRoute = ({ redirectTo }) => {
  // used to check if the user is authenticated (logged in) and if the page is still loading.
  const { isAuthenticated, isLoading  } = useAuth0() 

  if (isLoading) {
    return <div className="loading-screen"> Loading... </div>
  }

  // if the user is logged in, the route will proceed correctly,
  // if not, the user is redirected to the welcome page.
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

export default function App() {
    return (
    <>
      <Routes>
        <Route path="/welcome" className="disabled-link" element={<Welcome />} />
        <Route element={<ProtectedRoute redirectTo="/welcome" />}>
          <Route path="/" className="disabled-link" element={<Mainpage />} />
          <Route path="/check-in" className="disabled-link" element={<CheckIn />} />
          <Route path="/inventory" className="disabled-link" element={<Inventory />} />
          <Route path="/skill-gallery" className="disabled-link" element={<SkillGallery />} />
          <Route path="/resume" className="disabled-link" element={<Resume />} />
          <Route path="/settings" className="disabled-link" element={<Settings />} />
          <Route path="/admin" className="disabled-link" element={<Admin />} />
        </Route>      
      </Routes>
    </>
    )
}

