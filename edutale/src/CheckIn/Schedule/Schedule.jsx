import * as USER from "../../USER.json"

export default function Schedule() {
    return (
        <p> Current check-in timing: {USER.schedule} </p>
    )
}