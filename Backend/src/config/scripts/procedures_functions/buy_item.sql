create or replace procedure buy_item(stu_id char, itm_id char, cost int, stu_money int)
as
$$
begin
    -- check again if the cost is more than the student's money, hence why
    -- we pass student's money again even though we can pull it from a select
    if (cost > stu_money) then
        raise exception 'cost of the item is more than current money';
    else
        -- subtract cost of item from student's money amount
        update Student
        set student_money = student_money - cost
        where student_id = stu_id;

        -- student now owns the item
        insert into Student_Inventory values
        (stu_id, itm_id);
    end if;
end;
$$ language plpgsql;