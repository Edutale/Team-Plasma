import { useNavigate } from "react-router-dom"

export default function Settings() {
    // to be able to navigate to the previous page
    const navigate = useNavigate()

    return (
      <>
        <p> This is settings yay </p>
        <button onClick={() => navigate("/")}> Back </button>
      </>
    )
}
