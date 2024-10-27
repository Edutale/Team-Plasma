import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "./LogoutButton"
import "./Profile.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  
  if (isLoading) {
    return <div>Loading ...</div>
  }
  
  return (
    isAuthenticated && (
      <div className="profile">
        <img className="profile-picture" src={user.picture} alt={user.name} />
        <h2 className="profile-name">{user.name}</h2>
        <LogoutButton />
      </div>
    )
  )
};

export default Profile

