create or replace procedure checkin_submit(stu_id char, exp int, lvl int, completed_quest_id char[])
as
$$
declare
    q_id char(15);
begin
    -- sets completed skills to completed in the db
    foreach q_id in array completed_quest_id loop
        update Student_Quest
        set completed = true
        where student_id = stu_id
            and quest_id = q_id;
    end loop;

    -- updates the student's global EXP and level
    update Student
    set total_exp = $2, student_lvl = $3
    where student_id = $1;
end;
$$ language plpgsql;