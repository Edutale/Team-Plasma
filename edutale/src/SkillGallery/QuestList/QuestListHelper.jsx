export default function QuestListHelper({quests, currSkill}) {

    function listQuestsAndResources(quests, currSkill) {
        let resources = []
        let retVal = []

        // get all quests from skills that are linked with currSkill
        let skillQuests = quests.filter(q => {
            return q.skill_name == currSkill
        })

        // for each quest in skillQuests, obtain the quest's stored resource
        // data. If this quest is not in the resources array yet, push its
        // quest_id and the resource data. Else, append resource data to
        // already existing resource data.
        skillQuests.forEach((quest) => {
            // get resource data
            let toPush = {name: quest.resource_name, link: quest.resource_link, desc: quest.resource_description}

            // if current quest's id is not in resources, initialize the object
            // {quest_id, resources} where resources is an array of associated resources
            if (!(resources.find(item => item.quest_id == quest.quest_id))) {
                resources.push({quest_id: quest.quest_id, resources: [toPush]})
            }
            else {
                // else, simply push toPush to existing resources array
                resources.find(item => item.quest_id == quest.quest_id).resources.push(toPush)
            }
        })

        // creates a new object for each quest that is an exact copy of said quest,
        // but with an added attribute whose value is the array of resources for said quest.
        for (let i in skillQuests) {
            if (!(retVal.find(item => item.quest_id == skillQuests[i].quest_id))) {
                retVal.push({
                    ...skillQuests[i],
                    ...(resources.find((rsc) => rsc.quest_id == skillQuests[i].quest_id))
                })
            }
        }

        return retVal
    }

    return (
        <>
        {/* ensures below code will run only when quests and currSkill are defined */}
        {quests && currSkill && (
            <>
              {listQuestsAndResources(quests, currSkill).map(item => (
                  <>
                    <p key={item.quest_id}> {item.quest_name}: {item.quest_description} </p>
                    {item.resources.map(rsc =>
                        <p> <a href={rsc.link}> {rsc.name} </a> - {rsc.desc} </p>
                    )}
                  </>
              ))}
            </>
        )}
        </>
    )
}