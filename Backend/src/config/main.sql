-- master script for setting up the Edutale backend. Run this file using the
-- PSQL Tool in PGAdmin 4. See the User Manual for more information.

-- setup scripts, order is crucial here
\ir ./drop.sql
\ir ./schema.sql
\ir ./test_plan_data.sql

-- procedures and functions
\ir ./scripts/procedures_functions/accept_quest.sql
\ir ./scripts/procedures_functions/buy_item.sql
\ir ./scripts/procedures_functions/calc_quest_exp.sql
\ir ./scripts/procedures_functions/checkin_submit.sql
\ir ./scripts/procedures_functions/complete_quest.sql
\ir ./scripts/procedures_functions/equip_item.sql
\ir ./scripts/procedures_functions/quit_quest.sql