import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
      <ul>
        <li>
          <Link to="/"> Mainpage </Link>
        </li>
        <li>
          <Link to="/check-in"> Check-In </Link>
        </li>
        <li>
          <Link to="/inventory"> Inventory </Link>
        </li>
        <li>
          <Link to="/skill-tree"> Skill Tree </Link>
        </li>
        <li>
          <Link to="/settings"> Settings </Link>
        </li>
      </ul>
  )
}

export default Navigation