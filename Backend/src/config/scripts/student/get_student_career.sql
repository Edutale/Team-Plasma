-- get the career of the student
select sc.career_id
from Student s, Student_Career sc, Career c
where s.student_id = $1
      and sc.student_id = s.student_id
      and sc.career_id = c.career_id;