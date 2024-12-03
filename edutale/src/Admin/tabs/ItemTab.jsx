import React, { useState } from "react"
import { Message } from "../components/Message"
import { useItems } from "../hooks/useItems"
import { ItemForm } from "../components/item/ItemForm"
import { itemService } from "../services/itemServices"
import { AdminFunctionSelector, AdminModal } from "../components/AdminFunctionSelector"

const ItemTab = () => {
    const [message, setMessage] = useState(null)
    const { items, error, fetchItems } = useItems()
    const [activeModal, setActiveModal] = useState(null)
    
    const handleSubmit = async(e, apiFunction, successMessage) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        try {
            await apiFunction(formData)
            setMessage({type: "success", text: successMessage})
            fetchItems()
            setActiveModal(null)
            e.target.reset()
        }
        catch(err) {
            setMessage({type: "error", text: err.message})
        }
    }

    const itemFunctions = [
        {
            name: "Add New Item",
            action: () => setActiveModal("add")
        },
        {
            name: "Update Item",
            action: () => setActiveModal("update")
        },
        {
            name: "Delete Item", 
            action: () => setActiveModal("delete")
        }
    ]

    return (
        <div className="item-tab">
            <h1> Item Management </h1>
            <Message message={message}/>
          
            <AdminFunctionSelector functions={itemFunctions}/>
          
            <AdminModal isOpen={activeModal === "add"} onClose={() => setActiveModal(null)} title="Add New Item">
                <ItemForm type="add" onSubmit={(e) => handleSubmit(e, itemService.addItem, "Item added successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "update"} onClose={() => setActiveModal(null)} title="Update Item">
                <ItemForm type="update" items={items} onSubmit={(e) => handleSubmit(e, (data) => itemService.updateItem(data.itemId, data), "Item updated successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "delete"} onClose={() => setActiveModal(null)} title="Delete Item">
                <ItemForm type="delete" items={items} onSubmit={(e) => handleSubmit(e, (data) => itemService.deleteItem(data.itemId), "Item deleted successfully")}/>
            </AdminModal>
        </div>
    )
}

export default ItemTab