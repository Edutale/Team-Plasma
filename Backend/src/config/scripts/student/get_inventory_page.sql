-- gets all student-specific information related to the Inventory page.
select distinct si.item_id, student_money, equip_armor, equip_weapon, equip_familiar
from Student s, Student_Inventory si
where s.student_id = $1
      and s.student_id = si.student_id
order by si.item_id;