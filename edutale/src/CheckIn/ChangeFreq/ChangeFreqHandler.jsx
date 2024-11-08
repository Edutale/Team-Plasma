import Axios from "axios"

export default async function ChangeFreqHandler(studentId, freq, setConfirm) {
    await Axios.put(
        `http://localhost:3000/api/students/${studentId}/freq`,
        {
            studentId: studentId,
            freq: freq
        },
        null
    ).then((response) => {
        setConfirm(true)
    })
}