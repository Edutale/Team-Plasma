import Axios from "axios"

export default async function EquipHandler(studentId, item_id) {
    await Axios.put(
        `http://localhost:3000/api/students/${studentId}/equip-item`,
        {
            studentId: studentId,
            itemId: item_id,
        },
        null
    ).then((response) => {
        console.log(response.data)
        window.location.reload()
    })
}