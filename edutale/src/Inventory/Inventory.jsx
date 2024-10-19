import Equipped from "./Equipped/Equipped"
import InventoryList from "./InventoryList/InventoryList"
import UserBar from "../Mainpage/UserBar/UserBar"
import Money from "./Money/Money"
import * as USER from "../USER.json"

import "./Inventory.css"

export default function Inventory() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <h1 className="header"> <u> {USER.name} </u> </h1>
          <Equipped />

          <div className="lower-inv-container">
            <div className="lower-inv-item">
              <UserBar className={"user-bar"}/>
            </div>
            <div className="lower-inv-item">
              <Money />
            </div>
          </div>
        </div>
        <div className="pane-item">
          <h1 className="header"> <u> Inventory </u> </h1>
          <InventoryList />
        </div>
      </div>
    )
}