-- Adds a new student
insert into Student(student_id, student_name, student_email)
values ($1, $2, $3);