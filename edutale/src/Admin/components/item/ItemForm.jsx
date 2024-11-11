import React, { useEffect } from 'react'
import { useItems } from '../../hooks/useItems'

export const ItemForm = ({ type, onSubmit, items = [], onItemChange = () => {} })=>{
    const { itemDetails, fetchItemDetails } = useItems()

    useEffect(()=>{
        if(itemDetails && type === 'update'){
            const form = document.querySelector('.item-form')
            if(form){
                form.querySelector('[name="itemName"]').placeholder = itemDetails.item_name
                form.querySelector('[name="itemPrice"]').placeholder = itemDetails.item_price
                form.querySelector('[name="itemType"]').value = itemDetails.item_type
            }
        }
    }, [itemDetails])

    const handleItemSelect = (e)=>{
        const itemId = e.target.value
        if(itemId && type === 'update'){
            fetchItemDetails(itemId)
        }
        onItemChange(e)
    }

    const renderFields = ()=>{
        switch(type){
            case 'add':
                return (
                    <>
                        <h2>Create Item</h2>
                        <div className="form-group">
                            <label htmlFor="itemName">Item Name:</label>
                            <input id="itemName" name="itemName" placeholder="Item Name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemType">Item Type:</label>
                            <select id="itemType" name="itemType" required>
                                <option value="">Select Type</option>
                                <option value="A">Armor</option>
                                <option value="W">Weapon</option>
                                <option value="F">Familiar</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemPrice">Price:</label>
                            <input id="itemPrice" name="itemPrice" type="number" min="0" placeholder="Item Price" required/>
                        </div>
                        <button type="submit">Add Item</button>
                    </>
                )

            case 'delete':
                return (
                    <>
                        <h2>Delete Item</h2>
                        <select name="itemId" required onChange={handleItemSelect}>
                            <option value="">Select Item</option>
                            {items.map(item=>(
                                <option key={`item-delete-${item.item_id}`} value={item.item_id}>
                                    {item.item_name}({item.item_type === 'A' ? 'Armor' : item.item_type === 'W' ? 'Weapon' : 'Familiar'})
                                </option>
                            ))}
                        </select>
                        <button type="submit">Delete Item</button>
                    </>
                )

            case 'update':
                return (
                    <>
                        <h2>Update Item</h2>
                        <select name="itemId" required onChange={handleItemSelect}>
                            <option value="">Select Item</option>
                            {items.map(item => (
                                <option key={`item-update-${item.item_id}`} value={item.item_id}>
                                    {item.item_name}({item.item_type === 'A' ? 'Armor' : item.item_type === 'W' ? 'Weapon' : 'Familiar'})
                                </option>
                            ))}
                        </select>
                        <input name="itemName" placeholder="Current Item Name"/>
                        <select name="itemType">
                            <option value="">Select Type</option>
                            <option value="A">Armor</option>
                            <option value="W">Weapon</option>
                            <option value="F">Familiar</option>
                        </select>
                        <input name="itemPrice" type="number" min="0" placeholder="Current Price"/>
                        <button type="submit">Update Item</button>
                    </>
                )

            default:
                return null;
        }
    }

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            // For update form, only include non-empty fields
            if(type === 'update'){
                const formData = new FormData(e.target)
                const updateData = {}
                for(let [key, value] of formData.entries()){
                    if(value.trim() !== ''){
                        updateData[key] = value
                    }
                }
                // Check if any fields were filled
                if(Object.keys(updateData).length <= 1) { // 1 because resourceId is always present
                    alert('Please fill at least one field to update')
                    return
                }
            }
            onSubmit(e)
        }} className="item-form">
            {renderFields()}
        </form>
    )
}