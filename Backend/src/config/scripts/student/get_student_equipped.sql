select equip_weapon, item_png_name, item_type, item_name
from Student, Inventory
where student_id = $1
      and equip_weapon = item_id
union
select equip_armor, item_png_name, item_type, item_name
from Student, Inventory
where student_id = $1
      and equip_armor = item_id
union
select equip_familiar, item_png_name, item_type, item_name
from Student, Inventory
where student_id = $1
      and equip_familiar = item_id;
