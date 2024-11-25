import React, { useState } from "react"
import "./AdminTabs.css"
import QuestTab from "./tabs/QuestTab"
import SkillTab from "./tabs/SkillTab"
import ResourceTab from "./tabs/ResourceTab"
import ItemTab from "./tabs/ItemTab"

const AdminTabs = ()=>{
    const [activeTab, setActiveTab] = useState("quests")
    return(
        <div className="tabs-container">
            {/* Tab Navigation */}
            <div className="tabs-navigation">
                <nav className="tabs-nav">
                    <button className={`tab-button ${activeTab === "quests" ? "active" : ""}`} onClick={()=>setActiveTab("quests")}>Quests</button>
                    <button className={`tab-button ${activeTab === "skills" ? "active" : ""}`} onClick={()=>setActiveTab("skills")}>Skills</button>
                    <button className={`tab-button ${activeTab === "resources" ? "active" : ""}`} onClick={()=>setActiveTab("resources")}>Resources</button>
                    <button className={`tab-button ${activeTab === "items" ? "active" : ""}`} onClick={()=>setActiveTab("items")}>Items</button>
                </nav>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {activeTab === "quests" && <QuestTab/>}
                {activeTab === "skills" && <SkillTab/>}
                {activeTab === "resources" && <ResourceTab/>}
                {activeTab === "items" && <div><ItemTab/></div>}
            </div>
        </div>
    )
}

export default AdminTabs