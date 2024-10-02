-- Removes a quest from the student's current quests
delete from Student_Quest
where student_id = $1
and quest_id = $2;