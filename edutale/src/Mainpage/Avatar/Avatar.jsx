/*--- Avatar.jsx ---*/ 

import * as USER from "../../USER.json"
import "./Avatar.css"

export default function Avatar() {
    return (
      <div className="avatar"> 
        <img className="aImg" src={USER.avatar} alt="Avatar" />
      </div>
    )
};