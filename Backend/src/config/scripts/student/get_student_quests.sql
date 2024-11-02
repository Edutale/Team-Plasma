-- get all quests of a student
select q.quest_name, q.quest_description, q.quest_id, q.quest_difficulty,
       q.is_project, q.quest_difficulty, sq.completed
from Student_Quest sq, Quest q
where sq.quest_id = q.quest_id
and sq.student_id = $1;