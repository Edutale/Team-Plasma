select progress_date
from student s, Student_Progress sp
where s.student_id = sp.student_id
      and s.student_id = $1;