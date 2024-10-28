-- Updates or inserts achievement progress for a student
insert into Student_Achievement(student_id, achievement_id, progress_count, completed)
values($1, $2, $3, $3 >= (select requirement_count from Achievement where achievement_id = $2))

on conflict (student_id, achievement_id)
do update set
    progress_count = excluded.progress_count,
    completed = excluded.progress_count >= (select requirement_count from Achievement where achievement_id = $2),
    completion_date = case
        when not Student_Achievement.completed and excluded.progress_count >= (select requirement_countselect requirement_count from Achievement where achievement_id = $2)
        then current_timestamp
        else Student_Achievement.completion_date
    end;