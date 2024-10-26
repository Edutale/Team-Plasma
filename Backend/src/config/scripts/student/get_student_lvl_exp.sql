-- gets the student's level, exp, and name. For use in the UserBar component.
select student_lvl, total_exp, student_name
from Student
where student_id = $1;