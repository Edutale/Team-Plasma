   import "./Welcome.css"
   import ConnectButton from "./ConnectButton/ConnectButton"
   
   export default function Welcome() {
       return (
        <div className="body">
        <div className="glass-container">
            <div className="welcome-box">
                <h2 className="welcome-header"> Welcome to Edutale </h2>
                <ConnectButton />
            </div>
        </div>
        </div>
       )
   }
   