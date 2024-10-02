-- get all quests of a student
select q.Quest_Name, sq.Cur_Status
from Student_Quest sq, Quest q
where sq.quest_id = q.quest_id
and sq.student_id = $1;