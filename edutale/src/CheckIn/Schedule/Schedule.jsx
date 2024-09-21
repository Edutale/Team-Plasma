import * as USER from "../../USER.json"

export default function Schedule() {
    return (
        <>
            <h1 className="header"> <u> Schedule </u> </h1>
            <p> Current check-in timing: {USER.schedule} </p>
        </>
    )
}