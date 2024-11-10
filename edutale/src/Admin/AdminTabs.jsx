import React, { useState } from 'react'
import QuestTab from './tabs/QuestTab'
import './AdminTabs.css'

const AdminTabs = ()=>{
    const [activeTab, setActiveTab] = useState('quests')

    return(
        <div className="tabs-container">
            {/* Tab Navigation */}
            <div className="tabs-navigation">
                <nav className="tabs-nav">
                    <button className={`tab-button ${activeTab === 'quests' ? 'active' : ''}`} onClick={()=>setActiveTab('quests')}>Quests</button>
                    <button className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`} onClick={()=>setActiveTab('skills')}>Skills</button>
                    <button className={`tab-button ${activeTab === 'resources' ? 'active' : ''}`} onClick={()=>setActiveTab('resources')}>Resources</button>
                    <button className={`tab-button ${activeTab === 'equipment' ? 'active' : ''}`} onClick={()=>setActiveTab('equipment')}>Equipment</button>
                </nav>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {activeTab === 'quests' && <QuestTab/>}
                {activeTab === 'skills' && <div>Skills Management Coming Soon</div>}
                {activeTab === 'resources' && <div>Resources Management Coming Soon</div>}
                {activeTab === 'equipment' && <div>Equipment Management Coming Soon</div>}

            </div>
        </div>
    )
}

export default AdminTabs