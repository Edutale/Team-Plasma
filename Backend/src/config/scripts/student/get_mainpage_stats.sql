-- gets all student-specific information related to the Mainpage.
select student_join_date, student_lvl, total_exp, student_name, skill_name, skill_exp
from Student s, Student_Skill ss, Skill sk
where s.student_id = $1
      and ss.student_id = s.student_id
      and sk.skill_id = ss.skill_id;