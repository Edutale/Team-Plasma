-- Checks if any new achievements should be awarded based on current progress
select a.achievement_id, a.achievement_name, a.exp_reward, a.money_reward
from Achievement a
left join Student_Achievement sa 
    on a.achievement_id = sa.achievement_id 
    and sa.student_id = $1
where sa.completed is not true
    and a.achievement_type = $2
    and $3 >= a.requirement_count;