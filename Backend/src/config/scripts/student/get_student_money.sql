-- gets the student's amount of money. For use in the Money component.
select student_name, student_money
from Student
where student_id = $1;