import * as USER from "../../USER.json"
import { useAuth0 } from "@auth0/auth0-react"

export default function Equipped() {
    const { user } = useAuth0()
    return (
        <>
          <h1 className="header1"> <u> {user.name} </u> </h1>
          <img className="inv-avatar" src={USER.avatar} alt="avatar" />
          <div className="equip-grid">
            <div className="grid-item">
              <img className="equip-img" src={USER.armor} alt="armor" />
              <p> Item name </p>
            </div>
            <div className="grid-item">
              <img className="equip-img" src={USER.weapon} alt="weapon" />
              <p> Item name </p>
            </div>
            <div className="grid-item">
              <img className="equip-img" src={USER.familiar} alt="familiar" />
              <p> Item name </p>
            </div>
          </div>
        </>
    )
}