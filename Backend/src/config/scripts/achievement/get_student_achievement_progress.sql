--Gets the student's progress of all achievements
select a.achievement_id, a.achievement_name, a.achievement_desc, a.requirement_count, sa.progress_count, sa.completed
from Achievement a
left join Student_Achievement sa
    on a.achievement_id = sa.achievement_id
    and sa.student_id = $1
order by a.achievement_type, a.requirement_count;