-- Gets a student's progress on achievements of a specific type
select a.achievement_id, a.achievement_name, a.requirement_count, sa.progress_count, sa.completed
from Achievement a
left join Student_Achievement sa
    on a.achievement_id = sa.achievement_id
    and sa.student_id = $1
where a.achievement_type = $2
order by a.requirement_count;