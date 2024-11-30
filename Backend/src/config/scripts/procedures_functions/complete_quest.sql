create or replace procedure complete_quest(stu_id char, qst_id char)
as
$$
begin
    update student_quest
    set completed = true
    where student_id = stu_id and quest_id = qst_id;
end;
$$ language plpgsql;