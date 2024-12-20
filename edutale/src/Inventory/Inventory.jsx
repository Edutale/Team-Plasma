import { useAuth0 } from "@auth0/auth0-react"
import Equipped from "./Equipped/Equipped"
import InventoryList from "./InventoryList/InventoryList"
import InvUserBar from "./InvUserBar/InvUserBar"
import Money from "./Money/Money"
import Header from "../Header/Header"

import "./Inventory.css"

import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "TESTSTU01"

export default function Inventory() {
    const [catalog, setCatalog] = useState()
    const [ownedItems, setOwnedItems] = useState()
    const [moneyAmt, setMoneyAmt] = useState()
    const [equipItems, setEquipItems] = useState()
    const [invProgress, setInvProgress] = useState()
    const [stuName, setStuName] = useState()

    // used to check if the user is authenticated (logged in) again as a failsafe
    // if the ProtectedRoute logic fails.
    const {isAuthenticated} = useAuth0()

    // fetch user related Inventory data
    useEffect(() => {
        fetchInventoryPage()
    }, [])

    // fetch entire Inventory catalog
    useEffect(() => {
        fetchCatalog()
    }, [])

    async function fetchInventoryPage() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/inventory`)
                .then((response) => {
                    setOwnedItems(response.data.map((item) => item.item_id))
                    setStuName(response.data[0].student_name)
                    setMoneyAmt(response.data[0].student_money)

                    setEquipItems({
                        armor: response.data[0].equip_armor,
                        weapon: response.data[0].equip_weapon,
                        familiar: response.data[0].equip_familiar
                    })

                    setInvProgress({
                        lvl: response.data[0].student_lvl,
                        exp: response.data[0].total_exp,
                        name: response.data[0].student_name
                    })

                })
        }
        catch(err) {
            console.error("Error fetching Inventory page: ", err)
        }
    }

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

    return isAuthenticated && catalog && equipItems && stuName && (
        <>
          <Header />
          <div className="pane-container">
            <div className="pane-item">
              <div className="user-pane">
                <Equipped catalog={catalog} equipItems={equipItems} stuName={stuName}/>
                <div className="lower-inv-container">
                  <div className="lower-inv-item">
                    <InvUserBar invProgress={invProgress} className="user-bar"/>
                  </div>
                  <div className="lower-inv-item">
                    <Money moneyAmt={moneyAmt}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pane-item">
              <h1 className="center-header"> <u> Inventory </u> </h1>
              <InventoryList catalog={catalog} ownedItems={ownedItems} studentId={studentId} moneyAmt={moneyAmt}/>
            </div>
          </div>
        </>
    )
}