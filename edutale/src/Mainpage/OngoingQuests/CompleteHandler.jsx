/*--- CompleteHandler.jsx ---*/ 

import Axios from "axios"

// updates quest row in student quests to completed when student completes quest
export default async function CompleteHandler(studentId, quest_id, quest_difficulty, progress) {
    let earnedGlobalExp = calculateExp(quest_difficulty) + progress.exp
    let newLvl = calculateLvl(earnedGlobalExp)
    let studentLvl = progress.lvl
    
    console.log(progress)
    console.log(quest_difficulty)
    console.log(earnedGlobalExp)
    console.log(newLvl)
    console.log(studentLvl)
    await Axios.put(
        `http://localhost:3000/api/students/${studentId}/complete-quest`,
        {
          studentId: studentId,
          questId: quest_id,
          totalExp: earnedGlobalExp,
          stuLvl: newLvl,
          netMoney: calcMoney(parseInt(studentLvl, 10), newLvl)
        },
        null
    ).then((response) => {
        console.log(response.data)
        window.location.reload()
    })
}

// calculates EXP to add to student's account
function calculateExp(diffNum) {
  switch (diffNum) {
      case 1:
          return 100
      case 2:
          return 200
      case 3:
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

// calculates the correct amount of money to give to the student if
// they levelled up. Will be 100 money per level for now.
function calcMoney(oldLvl, newLvl) {
  return (newLvl - oldLvl) * 100
}