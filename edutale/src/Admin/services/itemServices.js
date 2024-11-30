import axios from "axios"
const URL = "http://localhost:3000/api"

export const itemService = {
    addItem: (data) => axios.post(`${URL}/inventory/inventory`, {
        itemType: data.itemType,
        itemName: data.itemName,
        itemPngName: data.itemName.toLowerCase().replace(/ /g, "_") + ".png",
        itemPrice: parseInt(data.itemPrice)
    }),
    updateItem: (itemId, data) => {
        const updateData = {}
        if (data.itemType) updateData.itemType = data.itemType
        if (data.itemName) {
            updateData.itemName = data.itemName
            updateData.itemPngName = data.itemName.toLowerCase().replace(/ /g, "_") + ".png"
        }
        if (data.itemPrice) updateData.itemPrice = parseInt(data.itemPrice)
        return axios.put(`${URL}/inventory/inventory/${itemId}`, updateData)
    },
    deleteItem: (itemId) => axios.delete(`${URL}/inventory/inventory/${itemId}`)
}