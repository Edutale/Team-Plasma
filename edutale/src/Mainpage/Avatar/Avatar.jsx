import * as USER from "../../USER.json"

export default function Avatar() {
    return (
      <div className="avatar"> 
        <img className="aImg" src={USER.avatar} alt="Avatar" />
      </div>
    )
};