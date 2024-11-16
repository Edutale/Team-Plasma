/*--- QuestModal.jsx ---*/ 

export default function QuestModal(props) {
    return (
        <div className="quest-content">
          {makeHeader(props)}
          <p> {props.qDesc} </p>
        </div>
    )
}

function makeHeader(props) {
    console.log(props.diff)
    switch(props.diff) {
        case 1:
            return <h3> {props.qName} - Beginner </h3>
        case 2:
            return <h3> {props.qName} - Intermediate </h3>
        case 3:
            return <h3> {props.qName} - Hard </h3>
    }
}