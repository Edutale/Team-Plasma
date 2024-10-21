export default function QuestModal(props) {
    return (
        <div className="quest-content">
            <h3> {props.qName} stuff </h3>
            <p> {props.qDesc} </p>
        </div>
    )
}