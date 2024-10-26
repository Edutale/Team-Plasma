

import {Routes, Route, Link } from "react-router-dom"
import Navigation from "./Navigation/Navigation"
import Settings from "./Settings/Settings"
import Admin from "./Admin/Admin"
import LogoutButton from "./LogoutButton"
import Profile from "./Profile"

// Note: <Routes> element renders whatever element is contained in the selected Route.
export default function Top() {
  return (
    <div className="top">
            <div className="topPane">
            <Profile/>
            <LogoutButton />
            <Link to="/settings" className="settings"><button> Settings </button></Link>
            <Link to="/admin" className="admin"><button> Admin </button></Link>
            </div>
            <div className="topPane">
            <Navigation />
            </div>
    </div>
  )
}