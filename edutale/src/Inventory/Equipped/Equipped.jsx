const armorPath = "../../../assets/armor/"
const weaponPath = "../../../assets/weapon/"
const familiarPath = "../../../assets/familiar/"

// placeholder image for avatar image
const avatarUrl = "../../../assets/avatar.gif"

export default function Equipped({catalog, equipItems, stuName}) {
    //const { user } = useAuth0()

    // find inventory row that has the same ID has the equipped item
    let eqArmor = catalog.find(item => item.item_id == equipItems.armor)
    let eqWeapon = catalog.find(item => item.item_id == equipItems.weapon)
    let eqFamiliar = catalog.find(item => item.item_id == equipItems.familiar)

    return (
        <>
          <h1 className="pane-header"> <u> {stuName} </u> </h1>
          <img className="inv-avatar" src={avatarUrl} alt="avatar" />
          <div className="equip-grid">
            {/* check if equipped armor is defined. If not, show dummy/empty picture */}
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