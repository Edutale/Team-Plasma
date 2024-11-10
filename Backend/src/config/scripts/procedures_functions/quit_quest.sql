create or replace procedure quit_quest(stu_id char, qst_id char)
as
$$
begin
    delete from student_quest
    where student_id = stu_id and quest_id = qst_id;
end;
$$ language plpgsql;