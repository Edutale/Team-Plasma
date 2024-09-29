import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {

  // any page inside of pageNoNav will not render the bookmarks
  const location = useLocation()
  const pageNoNav = ["/settings"]

  if (pageNoNav.includes(location.pathname)) {
    return null
  }

  return (
    <div className="bookmarksBox">
      <NavLink to="/" className="bookmark mainMark"><p className="markIcon"> Mainpage </p></NavLink>
      <NavLink to="/check-in" className="bookmark check-inMark"><p className="markIcon"> Check-In </p></NavLink>
      <NavLink to="/inventory" className="bookmark inventoryMark"><p className="markIcon"> Inventory </p></NavLink>
      <NavLink to="/skill-list" className="bookmark skill-listMark"><p className="markIcon"> Skill List </p></NavLink>
      <NavLink to="/store" className="bookmark storeMark"><p className="markIcon"> Store </p></NavLink>
    </div>

          )
}

