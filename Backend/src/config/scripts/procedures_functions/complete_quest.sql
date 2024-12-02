create or replace procedure complete_quest(stu_id char, qst_id char, tot_exp int, net_money int, stu_lvl int)
as
$$
declare
    skill record;
begin
    -- updates student's quests to show its completed
    update student_quest
    set completed = true
    where student_id = stu_id and quest_id = qst_id;

    -- updates the student's global EXP and level
    update student
    set total_exp = tot_exp, student_lvl = stu_lvl,
        student_money = student_money + net_money
    where student_id = stu_id;

    -- updates each skill EXP related to the completed quest
    for skill in select q.quest_difficulty, sq.skill_id
                  from Quest q, Skill_Quest sq, Student_Skill ss
                  where q.quest_id = qst_id
                        and qst_id = sq.quest_id
                        and ss.student_id = stu_id
                        and ss.skill_id = sq.skill_id
    loop
        update Student_Skill
        set skill_exp = skill_exp + calc_quest_exp(skill.quest_difficulty)
        where skill_id = skill.skill_id
              and student_id = stu_id;
    end loop;
end;
$$ language plpgsql;