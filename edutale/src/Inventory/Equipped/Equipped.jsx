import * as USER from "../../USER.json"

export default function Equipped() {
    return (
        <>
          <img className="avatar" src={USER.avatar} alt="avatar" />
          <div className="equip-grid">
            <div class="grid-item">
              <img className="armor" class="grid-img" src={USER.armor} alt="armor" />
              <p> Item name </p>
            </div>
            <div class="grid-item">
              <img className="weapon" class="grid-img" src={USER.weapon} alt="weapon" />
              <p> Item name </p>
            </div>
            <div class="grid-item">
              <img className="familiar" class="grid-img" src={USER.familiar} alt="familiar" />
              <p> Item name </p>
            </div>
          </div>
        </>
    )
}