create or replace procedure accept_quest(stu_id char, qst_id char)
as
$$
begin
    insert into student_quest (student_id, quest_id, completed)
    values (stu_id, qst_id, false);
end;
$$ language plpgsql;