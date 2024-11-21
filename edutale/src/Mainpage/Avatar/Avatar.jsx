/*--- Avatar.jsx ---*/ 

// placeholder image for avatar image
const avatarUrl = "../../../assets/avatar.gif"
import "./Avatar.css"

export default function Avatar() {
    return (
      <div className="avatar"> 
        <img className="aImg" src={avatarUrl} alt="Avatar" />
      </div>
    )
};