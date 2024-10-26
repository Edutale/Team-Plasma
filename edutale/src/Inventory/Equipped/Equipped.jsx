import * as USER from "../../USER.json"

export default function Equipped() {
    return (
        <>
          <h1 className="header"> <u> placeholder fix later </u> </h1>
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