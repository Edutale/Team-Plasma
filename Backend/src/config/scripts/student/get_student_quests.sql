-- get all quests of a student
select q.quest_name, sq.cur_status, q.quest_id
from Student_Quest sq, Quest q
where sq.quest_id = q.quest_id
and sq.student_id = $1;