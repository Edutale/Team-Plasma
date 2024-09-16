import * as USER from "../../USER.json"

export default function Avatar() {
    return (
      /* want to use USER.avatar here ↓ but not working so uhhhh */
      <div className="avatar"> 
        <img className="aImg" src={USER.avatar} alt="Avatar" />
      </div>
    )
};