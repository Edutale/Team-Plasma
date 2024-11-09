import Axios from "axios"

export default async function BuyHandler(studentId, item_id, item_price, moneyAmt) {
    if (item_price > moneyAmt) {
        alert("You don't have enough money to buy this item!")
        return
    }
    else {
        await Axios.put(
            `http://localhost:3000/api/students/${studentId}/buy-item`,
            {
                studentId: studentId,
                itemId: item_id,
                itemPrice: item_price,
                moneyAmt: moneyAmt
            },
            null
        ).then((response) => {
            console.log(response.data)
            window.location.reload()
        })
    }
}