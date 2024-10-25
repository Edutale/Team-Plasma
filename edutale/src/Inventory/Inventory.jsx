import Equipped from "./Equipped/Equipped"
import InventoryList from "./InventoryList/InventoryList"
import UserBar from "../Mainpage/UserBar/UserBar"
import Money from "./Money/Money"
import * as USER from "../USER.json"

import "./Inventory.css"

import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "TESTSTU01"

export default function Inventory() {
    const [catalog, setCatalog] = useState()
    const [ownedItems, setOwnedItems] = useState()

    // effect for catalog
    useEffect(() => {
        fetchCatalog()
    }, [])

    // effect for pulling student-owned items
    useEffect(() => {
        fetchStudentItems()
    }, [])

    async function fetchCatalog() {
        try {
            await Axios.get(`http://localhost:3000/api/inventory/inventory`)
                .then((response) => {
                    setCatalog(response.data)
                })
        }
        catch(err) {
            console.error("Error fetching catalog: ", err)
        }
    }

    async function fetchStudentItems() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/inventory`)
                .then((response) => {
                    setOwnedItems(response.data)
                })
        }
        catch(err) {
            console.error("Error fetching student inventory: ", err)
        }
    }

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
          <InventoryList catalog={catalog} ownedItems={ownedItems}/>
        </div>
      </div>
    )
}