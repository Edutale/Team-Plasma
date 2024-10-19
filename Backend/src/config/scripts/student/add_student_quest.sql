-- Adds new quest for a student
insert into Student_Quest(student_id, quest_id, cur_status)
values ($1, $2, $3);