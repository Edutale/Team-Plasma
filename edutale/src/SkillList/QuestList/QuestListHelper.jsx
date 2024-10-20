import React, { useState, useEffect } from "react"

export default function QuestListHelper({quests, currSkill}) {
    return (
        <>
        {/* ensures below code will run only when quests and currSkill are defined */}
        {quests && currSkill && (
            <>
              {quests.map(item => (
                currSkill === item.skill_name && (
                  <p key={item.quest_id}> {item.quest_name} </p>
                )
              ))}
            </>
        )}
        </>
    )
}