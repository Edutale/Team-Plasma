/*--- ConnectButton.jsx ---*/ 

import { useAuth0 } from "@auth0/auth0-react"

import "./ConnectButton.css"

const ConnectButton = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <button className="connect-button" onClick={() => loginWithRedirect()}>
          Connect
        </button>
    )
}

export default ConnectButton