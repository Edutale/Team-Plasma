-- function for a student equipping an item
create or replace procedure equip_item(stu_id char, to_equip_id char)
as
$$
declare
    item_exists int;
    item_owned int;
    equip_type char(1);
begin
    -- first check if the to_equip ID exists
    select count(*)
    into item_exists
    from Inventory
    where item_id = to_equip_id;

    -- then check if the student owns the item
    select count(*)
    into item_owned
    from Student_Inventory
    where item_id = to_equip_id
          and student_id = stu_id;

    -- if both are true, update student's equipped item
    if item_exists = 1 and item_owned = 1 then
        -- first get the type of the item
        select item_type
        into equip_type
        from Inventory
        where item_id = to_equip_id;

        -- then update the corresponding equipped item in Student row
        if equip_type = 'W' then
            update Student
            set equip_weapon = to_equip_id
            where student_id = stu_id;

        elsif equip_type = 'A' then
            update Student
            set equip_armor = to_equip_id
            where student_id = stu_id;

        elsif equip_type = 'F' then
            update Student
            set equip_familiar = to_equip_id
            where student_id = stu_id;

        else
            raise exception 'This item has an invalid item type code';
        end if;
    else
        raise exception 'This item does not exist, or is not owned';
    end if;
end;
$$ language plpgsql;