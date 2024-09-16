import * as USER from "../../USER.json"

export default function Userbar() {
    return (
      <div className="userBar">
        <h2> {USER.name} <progress className="lBar" value={USER.level} /> </h2>
      </div>
    )
};