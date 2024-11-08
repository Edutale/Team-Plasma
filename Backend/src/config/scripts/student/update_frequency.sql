-- update the student's frequency.
update Student
set reminder_freq = $2
where student_id = $1;