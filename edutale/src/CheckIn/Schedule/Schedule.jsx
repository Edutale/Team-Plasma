import * as USER from "../../USER.json"

export default function Schedule() {
    return (
        <div>
            <h1 className="header"> <u> Schedule </u> </h1>
            <p> Current check-in timing: {USER.schedule} </p>
        </div>
    )
}