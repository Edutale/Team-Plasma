/*--- LogoutButton.jsx ---*/ 

import { useAuth0 } from "@auth0/auth0-react"

import "./LogoutButton.css"

const LogoutButton = () => {
    const { logout } = useAuth0()

    return (
      <button className="logout-button" onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173/welcome" } })}>
        Log Out
      </button>
    )
}

export default LogoutButton