create or replace procedure accept_quest(stu_id char, qst_id char)
as
$$
declare
    num_stu_quests int;
begin
    select count(*)
    into num_stu_quests
    from student_quest
    where student_id = stu_id and completed = false;

    if num_stu_quests < 4 then
      insert into student_quest (student_id, quest_id, completed)
      values (stu_id, qst_id, false);
    end if;
end;
$$ language plpgsql;