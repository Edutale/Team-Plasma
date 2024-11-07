
import { useAuth0 } from "@auth0/auth0-react"
import Equipped from "./Equipped/Equipped"
import InventoryList from "./InventoryList/InventoryList"
import UserBar from "../Mainpage/UserBar/UserBar"
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

    // used to check if the user is authenticated (logged in) again as a failsafe
    // if the ProtectedRoute logic fails.
    const {isAuthenticated} = useAuth0()

    // effect for catalog
    useEffect(() => {
        fetchCatalog()
    }, [])

    // effect for pulling student-owned items
    useEffect(() => {
        fetchStudentItems()
    }, [])

    // effect for pulling student money amount
    useEffect(() => {
        fetchStudentMoney()
    }, [])

    // effect for pulling student equipped items
    useEffect(() => {
        fetchStudentEquipped()
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

    async function fetchStudentMoney() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/money`)
                .then((response) => {
                    setMoneyAmt(response.data[0].student_money)
                })
        }
        catch(err) {
            console.error("Error fetching catalog: ", err)
        }
    }

    async function fetchStudentEquipped() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/equips`)
                .then((response) => {
                    console.log(response)
                    setEquipItems(response.data)
                })
        }
        catch(err) {
            console.error("Error fetching catalog: ", err)
        }
    }

    return (
        // the page will only render if the user is logged in
        isAuthenticated && equipItems && (
        <>
        <Header />
        <div className="pane-container">
          <div className="pane-item">
            <Equipped catalog={catalog} equipItems={equipItems}/>
              <div className="lower-inv-container">
                <div className="lower-inv-item">
                  <UserBar className={"user-bar"}/>
                </div>
                <div className="lower-inv-item">
                  <Money moneyAmt={moneyAmt}/>
                </div>
              </div>
            </div>
          <div className="pane-item">
            <h1 className="header2"> <u> Inventory </u> </h1>
            <InventoryList catalog={catalog} ownedItems={ownedItems} studentId={studentId} moneyAmt={moneyAmt}/>
          </div>
        </div>
        </>
        )
)
}