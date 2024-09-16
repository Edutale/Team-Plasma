import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <div className="bookmarksBox">
      <Link to="/"><button className='bookmark mainpageMark'> Mainpage </button></Link>
      <Link to="/check-in"><button className='bookmark check-inMark'> Check-In </button></Link>
      <Link to="/inventory"><button className='bookmark inventoryMark'> Inventory </button></Link>
      <Link to="/skill-tree"><button className='bookmark skill-treeMark'> Skill Tree </button></Link>
      <Link to="/settings"><button className='bookmark settingsMark'> Settings </button></Link>
    </div>
          )
}

export default Navigation