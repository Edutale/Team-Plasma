import * as USER from "../../USER.json"

export default function Schedule({freq, getFreqWord}) {
    return freq && (
        <>
          <p> Current check-in timing: {getFreqWord(freq)} </p>
        </>
    )
}