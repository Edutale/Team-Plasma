import { NavLink } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <div className="bookmarksBox">
      <NavLink to="/" className='bookmark mainMark'><p className='markIcon'> Mainpage </p></NavLink>
      <NavLink to="/check-in" className='bookmark check-inMark'><p className='markIcon'> Check-In </p></NavLink>
      <NavLink to="/inventory" className='bookmark inventoryMark'><p className='markIcon'> Inventory </p></NavLink>
      <NavLink to="/skill-tree" className='bookmark storeMark'><p className='markIcon'> Skill Tree </p></NavLink>
      <NavLink to="/settings" className='bookmark settingsMark'><p className='markIcon'> Settings </p></NavLink>
    </div>

          )
}

export default Navigation