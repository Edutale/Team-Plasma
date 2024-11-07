import * as USER from "../../USER.json"

const armorPath = "../../../assets/armor/"
const weaponPath = "../../../assets/weapon/"
const familiarPath = "../../../assets/familiar/"

export default function Equipped({equipItems}) {
    let eqArmor = equipItems.find((item) => item.item_type == "A")
    let eqWeapon = equipItems.find((item) => item.item_type == "W")
    let eqFamiliar = equipItems.find((item) => item.item_type == "F")

    return (
        <>
          <h1 className="header"> <u> placeholder fix later </u> </h1>
          <img className="inv-avatar" src={USER.avatar} alt="avatar" />
          <div className="equip-grid">
            {eqArmor ? (
              <div className="grid-item">
                <img className="equip-img" src={armorPath + eqArmor.item_png_name} alt="armor" />
                <p> {eqArmor.item_name} </p>
              </div>
            ) : (
              <div className="grid-item">
                <img className="equip-img" src="../../../assets/dummy.png" alt="armor" />
                <p> No equipped armor </p>
              </div>
            )}
            {eqWeapon ? (
              <div className="grid-item">
                <img className="equip-img" src={weaponPath + eqWeapon.item_png_name} alt="weapon" />
                <p> {eqWeapon.item_name} </p>
              </div>
            ) : (
              <div className="grid-item">
                <img className="equip-img" src="../../../assets/dummy.png" alt="weapon" />
                <p> No equipped weapon </p>
              </div>
            )}
            {eqFamiliar ? (
              <div className="grid-item">
                <img className="equip-img" src={familiarPath + eqFamiliar.item_png_name} alt="familiar" />
                <p> {eqFamiliar.item_name} </p>
              </div>
            ) : (
              <div className="grid-item">
                <img className="equip-img" src="../../../assets/dummy.png" alt="familiar" />
                <p> No equipped familiar </p>
              </div>
            )}
          </div>
        </>
    )
}