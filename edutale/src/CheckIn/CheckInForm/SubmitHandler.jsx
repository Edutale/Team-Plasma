import Axios from "axios"

const studentId = "TESTSTU01"

export default async function SubmitHandler(entries, progress) {
    // +20 since a check-in by default will give 20 global EXP
    let earnedGlobalEXP = 20 + progress.total_exp
    let completedQuests = []
    
    // add correct EXP value from every quest marked as completed, and
    // add the quest's ID to completedQuests if it is completed
    for (let i=0; i < entries.length; i++) {
        let idAndDiff = []
        idAndDiff = entries[i].quest_id_diff.split(",")

        if (entries[i].completed == "true") {
            earnedGlobalEXP += calculateEXP(idAndDiff[1])
            completedQuests.push(idAndDiff[0])
        }
    }

    let newLvl = calculateLvl(earnedGlobalEXP)

    await Axios.put(
        `http://localhost:3000/api/students/${studentId}/global-exp`,
        {exp: earnedGlobalEXP, lvl: newLvl, completedQuests: completedQuestsFormatter(completedQuests)},
        null
    ).then((response) => console.log(response.data))
}

// calculates EXP to add to student's account
function calculateEXP(diffNum) {
    switch (diffNum) {
        case "1":
            return 100
        case "2":
            return 200
        case "3":
            return 400
    }
}

// calculates correct level after adding to-be-earned EXP
function calculateLvl(exp) {
    let retVal = 0
    while (exp >= 0) {
        retVal++
        exp -= 100 + (10 * (retVal-1))
    }

    return retVal
}

// formatting array of quests so that PGSQL knows it's an array
function completedQuestsFormatter(completedQuests) {
    return "".concat(completedQuests.map(item => item + ","))
}