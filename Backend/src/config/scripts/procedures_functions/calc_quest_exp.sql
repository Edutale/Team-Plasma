-- function for calculating the correct amount of EXP
-- given a quest's difficulty.
create or replace function calc_quest_exp(difficulty int) returns int
as
$$
begin
    if difficulty = 1 then
        return 100;
    elsif difficulty = 2 then
        return 200;
    elsif difficulty = 3 then
        return 400;
    else
        return 0;
    end if;
end;
$$ language plpgsql;