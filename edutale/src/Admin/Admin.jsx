import { useNavigate } from "react-router-dom"

export default function Admin() {
    // to be able to navigate to the previous page
    const navigate = useNavigate()

    return (
      <>
        <p> This is admin yay </p>
        <button onClick={() => navigate("/")}> Back </button>
      </>
    )
}
