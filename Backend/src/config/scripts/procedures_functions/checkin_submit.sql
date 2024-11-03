create or replace procedure checkin_submit(
    stu_id char, tot_exp int, net_exp int, stu_lvl int, completed_quest_ids char[],
    num_completed int, mins int)
as
$$
declare
    q_id char(9);
    skill record;
begin
    foreach q_id in array completed_quest_ids loop
        -- sets completed skills to completed in the db
        update Student_Quest
        set completed = true
        where student_id = stu_id
            and quest_id = q_id;

        -- updates each skill EXP related to the completed quest
        for skill in select q.quest_difficulty, sq.skill_id
                     from Quest q, Skill_Quest sq, Student_Skill ss
                     where q.quest_id = q_id
                           and q_id = sq.quest_id
                           and ss.student_id = stu_id
                           and ss.skill_id = sq.skill_id
        loop
            update Student_Skill
            set skill_exp = skill_exp + calc_quest_exp(skill.quest_difficulty)
            where skill_id = skill.skill_id
                  and student_id = stu_id;
        end loop;
    end loop;

    -- updates the student's global EXP and level
    update Student
    set total_exp = tot_exp, student_lvl = stu_lvl
    where student_id = stu_id;

    -- inserts row into Student_Progress to record today's check in
    insert into Student_Progress values
    (stu_id, current_date, net_exp, num_completed, mins);
end;
$$ language plpgsql;