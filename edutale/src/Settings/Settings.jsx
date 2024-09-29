import { Link } from "react-router-dom"

export default function Settings() {
    return (
      <>
        <p> This is settings yay </p>
        <button> <Link to="/" className=""><p> Back to Mainpage </p></Link> </button>
      </>
    )
}
