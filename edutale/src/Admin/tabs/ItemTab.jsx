import React, { useState } from 'react'
import { Message } from '../components/Message'
import { useItems } from '../hooks/useItems'
import { ItemForm } from '../components/item/ItemForm'
import { itemService } from '../services/itemServices'

const ItemTab = ()=>{
    const [message, setMessage] = useState(null)
    const { items, error, fetchItems } = useItems()
    
    const handleSubmit = async(e, apiFunction, successMessage)=>{
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        try{
            await apiFunction(formData)
            setMessage({type: 'success', text: successMessage})
            fetchItems()
            e.target.reset()
        } catch(err){
            setMessage({type: 'error', text: err.message})
        }
    }

    return(
        <div className="item-tab">
            <h1>Item Management</h1>
            <Message message={message}/>
            <div className="item-forms">
                <ItemForm type="add" onSubmit={(e)=>handleSubmit(e, itemService.addItem, 'Item added successfully')}/>
                <ItemForm type="delete" items={items} onSubmit={(e)=>handleSubmit(e, (data) => itemService.deleteItem(data.itemId), 'Item deleted successfully')}/>
                <ItemForm type="update" items={items} onSubmit={(e)=>handleSubmit(e, (data) => itemService.updateItem(data.itemId, {
                        itemName: data.itemName,
                        itemType: data.itemType,
                        itemPrice: data.itemPrice
                    }), 'Item updated successfully')}
                />
            </div>
        </div>
    )
}

export default ItemTab