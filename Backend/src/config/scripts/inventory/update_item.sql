update Inventory
set 
    item_type = COALESCE($2, item_type),
    item_name = COALESCE($3, item_name),
    item_png_name = COALESCE($4, item_png_name),
    item_price = COALESCE($5, item_price)
where item_id = $1;