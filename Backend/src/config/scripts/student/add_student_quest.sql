-- Adds new quest for a student
insert into Student_Quest(student_id, quest_id, Cur_Status)
values ($1, $2, $3);