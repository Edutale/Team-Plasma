import { useNavigate } from "react-router-dom"

export default function Settings() {
    // to be able to navigate to the previous page
    const navigate = useNavigate()

    return (
      <>
        <p> This is placeholder text for the Settings page. This page will be populated in future versions of Edutale. </p>
        <button onClick={() => navigate("/")}> Back </button>
      </>
    )
}
