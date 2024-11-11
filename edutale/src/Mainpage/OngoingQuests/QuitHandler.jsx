/*--- QuitHandler.jsx ---*/ 

import Axios from "axios"

// deletes quest row from student quests when student quits quest
export default async function QuitHandler(studentId, quest_id) {
    await Axios.put(
        `http://localhost:3000/api/students/${studentId}/quit-quest`,
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