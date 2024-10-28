/*--- Navigation.jsx ---*/ 

import { NavLink, useLocation } from "react-router-dom"

import "./Navigation.css"

export default function Navigation() {
    // any page inside of pageNoNav will not render the bookmarks
    const location = useLocation()
    const pageNoNav = ["/settings", "/admin"]

    if (pageNoNav.includes(location.pathname)) {
      return null
    }

    return (
      <div className="bookmarks-box">
        <NavLink to="/" className="bookmark main-mark"><p className="mark-icon"> Mainpage </p></NavLink>
        <NavLink to="/check-in" className="bookmark check-in-mark"><p className="mark-icon"> Check-In </p></NavLink>
        <NavLink to="/inventory" className="bookmark inventory-mark"><p className="mark-icon"> Inventory </p></NavLink>
        <NavLink to="/skill-list" className="bookmark skill-list-mark"><p className="mark-icon"> Skill Gallery </p></NavLink>
        <NavLink to="/resume" className="bookmark resume-mark"><p className="mark-icon"> Resume </p></NavLink>
      </div>

    )
}

