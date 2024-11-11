import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminTabs from './AdminTabs'
import './AdminTabs.css'

export default function Admin(){
    const navigate = useNavigate()
    return(
        <div className="admin-containeer">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <button onClick={()=>navigate("/")} className="back-button">Back</button>
            </div>
            <AdminTabs/>
        </div>
    )
}