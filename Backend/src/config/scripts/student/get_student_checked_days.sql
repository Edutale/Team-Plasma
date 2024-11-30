select progress_date, gained_exp, quests_completed, study_time, reminder_freq
from student s, Student_Progress sp
where s.student_id = sp.student_id
      and s.student_id = $1
order by progress_date desc;