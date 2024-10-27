

import { Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import Profile from "../Profile"

import "./Header.css"

// Note: <Routes> element renders whatever element is contained in the selected Route.
export default function Header() {
  return (
    <div className="header">
      <div className="header-pane">
        <Profile/>
        <div className="settings-and-admin">
          <Link to="/settings" className="settings-button"><button> Settings </button></Link>
          <Link to="/admin" className="admin-button"><button> Admin </button></Link>
        </div>
      </div>
      <div className="header-pane">
        <Navigation />
      </div>
    </div>
  )
}