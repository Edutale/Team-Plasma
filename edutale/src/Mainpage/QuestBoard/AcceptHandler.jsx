import Axios from "axios"

export default async function AcceptHandler(studentId, quest_id) {
    await Axios.put(
        `http://localhost:3000/api/students/${studentId}/accept-quest`,
        {
          studentId: studentId,
          questId: quest_id
        },
        null
    ).then((response) => {
        console.log(response.data)
        window.location.reload()
    })
}