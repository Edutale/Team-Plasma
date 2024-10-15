import * as USER from "../../USER.json"

export default function Equipped() {
    return (
        <>
          <img className="avatar" src={USER.avatar} alt="avatar" />
          <div className="equip-grid">
            <div className="grid-item">
              <img className="grid-img" src={USER.armor} alt="armor" />
              <p> Item name </p>
            </div>
            <div className="grid-item">
              <img className="grid-img" src={USER.weapon} alt="weapon" />
              <p> Item name </p>
            </div>
            <div className="grid-item">
              <img className="grid-img" src={USER.familiar} alt="familiar" />
              <p> Item name </p>
            </div>
          </div>
        </>
    )
}