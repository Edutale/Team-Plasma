select checkin_date
from student s, Student_Checkin sc
where s.student_id = sc.student_id
      and s.student_id = $1;