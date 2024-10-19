-- get the join date of the student
select student_join_date
from Student
where student_id = $1;