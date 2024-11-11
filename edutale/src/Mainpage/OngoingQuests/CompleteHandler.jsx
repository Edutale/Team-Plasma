/*--- CompleteHandler.jsx ---*/ 

import Axios from "axios"

// updates quest row in student quests to completed when student completes quest
export default async function CompleteHandler(studentId, quest_id) {
    await Axios.put(
        `http://localhost:3000/api/students/${studentId}/complete-quest`,
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