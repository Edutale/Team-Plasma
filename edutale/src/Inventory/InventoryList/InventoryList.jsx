import Popup from "reactjs-popup"
import BuyHandler from "./BuyHandler"

import "./InventoryList.css"

export default function InventoryList({catalog, ownedItems, studentId, moneyAmt}) {
    const armorPath = "../../../assets/armor/"
    const weaponPath = "../../../assets/weapon/"
    const familiarPath = "../../../assets/familiar/"

    function setOwned(catalog, ownedItems) {
        let studentOwned = ownedItems.map(item => item.item_id)

        catalog.forEach((item) => {
            item["owned"] = studentOwned.includes(item.item_id)
        })
    }

    return catalog && ownedItems && studentId && toString(moneyAmt) && (
      <>
        {setOwned(catalog, ownedItems)}
        <div className="item-type">
        <h2 className="type-header"> Armor </h2>
        <div className="storage-div">
          {catalog.map(item => (item.item_type == "A") && (
            <Popup key={item.item_name + "modal"} trigger= {
              <button className={item.owned ? "item owned" : "item unowned"}>
                <img className="item-img" src={armorPath + item.item_png_name} title={item.item_name} alt={item.item_name}/>
              </button>}
              modal nested>{
                close => (
                  <div className="item-modal">
                    <div className="modal-header">
                      <button className="modal-header-button close" onClick={() => close()}>
                        ⨯
                      </button>
                    </div>
                    {/* put in either the equip item text or the buy item text depending on whether item is owned */}
                    {item.owned ? (
                      <>
                        <EquipItemText name={item.item_name}/>
                        <div className="freq-footer">
                          <button className="modal-footer-button close" onClick={() => {console.log('test'); close()}}>
                            Cancel
                          </button>
                          <button className="modal-footer-button complete" onClick={() => close()}>
                            Equip Item
                          </button>
                        </div>
                      </>) : (
                        <>
                          <BuyItemText name={item.item_name} price={item.item_price}/>
                          <div className="freq-footer">
                            <button className="modal-footer-button close"
                              onClick={() => close()}>
                              Cancel
                            </button>
                            <button className="modal-footer-button complete"
                              onClick={() => BuyHandler(studentId, item.item_id, item.item_price, moneyAmt)}>
                              Purchase Item
                            </button>
                          </div>
                        </>)}
                  </div>
                )
              }
            </Popup>
          ))}
        </div>
        </div>

        <div className="item-type">
        <h2 className="type-header"> Weapons </h2>
        <div className="storage-div">
          {catalog.map(item => (item.item_type == "W") && (
            <Popup key={item.item_name + "modal"} trigger= {
              <button className={item.owned ? "item owned" : "item unowned"}>
                <img className="item-img" src={weaponPath + item.item_png_name} title={item.item_name} alt={item.item_name}/>
              </button>}
              modal nested>{
                close => (
                  <div className="item-modal">
                    <div className="modal-header">
                      <button className="modal-header-button close" onClick={() => close()}>
                        ⨯
                      </button>
                    </div>
                    {item.owned ? (
                      <>
                        <EquipItemText name={item.item_name}/>
                        <div className="freq-footer">
                          <button className="modal-footer-button close" onClick={() => close()}>
                            Cancel
                          </button>
                          <button className="modal-footer-button complete" onClick={() => close()}>
                            Equip Item
                          </button>
                        </div>
                      </>) : (
                        <>
                          <BuyItemText name={item.item_name} price={item.item_price}/>
                          <div className="freq-footer">
                            <button className="modal-footer-button close" onClick={() => close()}>
                              Cancel
                            </button>
                            <button className="modal-footer-button complete" onClick={() => close()}>
                              Purchase Item
                            </button>
                          </div>
                        </>)}
                  </div>
                )
              }
            </Popup>
          ))}
        </div>
        </div>
        
        <div className="item-type">
        <h2 className="type-header"> Familiars </h2>
        <div className="storage-div">
          {catalog.map(item => (item.item_type == "F") && (
            <Popup key={item.item_name + "modal"} trigger= {
              <button className={item.owned ? "item owned" : "item unowned"}>
                <img className="item-img" src={familiarPath + item.item_png_name} title={item.item_name} alt={item.item_name}/>
              </button>}
              modal nested>{
                close => (
                  <div className="item-modal">
                    <div className="modal-header">
                      <button className="modal-header-button close" onClick={() => close()}>
                        ⨯
                      </button>
                    </div>
                    {item.owned ? (
                      <>
                        <EquipItemText name={item.item_name}/>
                        <div className="freq-footer">
                          <button className="modal-footer-button close" onClick={() => close()}>
                            Cancel
                          </button>
                          <button className="modal-footer-button complete" onClick={() => close()}>
                            Equip Item
                          </button>
                        </div>
                      </>) : (
                        <>
                          <BuyItemText name={item.item_name} price={item.item_price}/>
                          <div className="freq-footer">
                            <button className="modal-footer-button close" onClick={() => close()}>
                              Cancel
                            </button>
                            <button className="modal-footer-button complete" onClick={() => close()}>
                              Purchase Item
                            </button>
                          </div>
                        </>)}
                  </div>
                )
              }
            </Popup>
          ))}
        </div>
        </div>
      </>
    )
}

function BuyItemText({name, price}) {
    return (
      <div className="item-modal">
        <p> <u> {name} </u> </p>
        <p> This item costs {price}. Do you want to purchase this item? </p>
      </div>
    )
}

function EquipItemText({name}) {
    return (
      <div className="item-modal">
        <p> <u> {name} </u> </p>
        <p> You own this item. Do you want to equip {name}? </p>
      </div>
    )
}