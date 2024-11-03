import Axios from "axios"

export default function BuyHandler(studentId, item_id, item_price, moneyAmt) {
    if (item_price > moneyAmt) {
        alert("You don't have enough money to buy this item!")
        return
    }
    else {
        return (<p> testing return </p>)
    }
}