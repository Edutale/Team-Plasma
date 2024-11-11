select item_id, item_type, item_name, item_png_name, item_price
from Inventory
where item_id = $1;