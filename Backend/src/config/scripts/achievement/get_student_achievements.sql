-- Gets all the achievements that a student has obtained
select a.achievement_id, a.achievement_name, sa.completion_date
from Achievement a, Student_Achievement sa
where a.achievement_id = sa.achievement_id
and sa.student_id = $1
and sa.completed is true;