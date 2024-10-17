-- get the join date of the student
select Student_Join_Date
from Student
where student_id = $1;