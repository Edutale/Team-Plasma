create table if not exists Student(
    STUDENT_ID          char(9),
    student_name        varchar(100) not null,
    student_email       varchar not null,
    student_join_date   date not null,
    total_exp           int default 0,
    student_lvl         int default 1,
    student_money       int default 0,
    reminder_freq       char(1) check(reminder_freq in ('D', 'W', 'M')),
    primary key         (STUDENT_ID)
);

create table if not exists Skill(
    SKILL_ID            char(8),
    skill_name          varchar(32) not null,
    skill_description   text not null,
    primary key         (SKILL_ID)
);

create table if not exists Student_Skill(
    student_id          char(9),
    skill_id            char(8),
    skill_xp            int default 0,
    primary key         (student_id, skill_id),
    foreign key         (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key         (skill_id) references Skill(SKILL_ID) on delete cascade
);

create table if not exists Career(
    CAREER_ID           char(10),
    career_name         varchar(32),
    career_description  text,
    primary key         (CAREER_ID)
);

create table if not exists Career_Skill(
    career_id               char(10),
    skill_id                char(8),
    importance_level        float,
    primary key             (career_id, skill_id),
    foreign key             (career_id) references Career(CAREER_ID) on delete cascade,
    foreign key             (skill_id) references Skill(SKILL_ID) on delete cascade
);

-- for now, students can only have one career because we haven't thought of
-- bookshelf implementation. However, making this table now may help with
-- scaling later.
create table if not exists Student_Career(
    student_id          char(9),
    career_id           char(10),
    primary key         (student_id, career_id),
    foreign key         (career_id) references Career(CAREER_ID) on delete cascade,
    foreign key         (student_id) references Student(STUDENT_ID) on delete cascade
);

create table if not exists Student_Checkin (
    student_id          char(9),
    checkin_date        date,
    primary key         (student_id, checkin_date),
    foreign key         (student_id) references Student(STUDENT_ID) on delete cascade
);

create table if not exists Quest(
    QUEST_ID            char(15),
    quest_name          varchar(255),
    quest_description   text,
    quest_difficulty    int check(quest_difficulty in (1, 2, 3)),
    is_project          boolean default false,
    primary key         (QUEST_ID)
);

create table if not exists Skill_Quest(
    skill_id        char(8),
    quest_id        char(15),
    primary key     (skill_id, quest_id),
    foreign key     (skill_id) references Skill(SKILL_ID) on delete cascade,
    foreign key     (quest_id) references Quest(QUEST_ID) on delete cascade
);

create table if not exists Student_Quest(
    student_id      char(9),
    quest_id        char(15),
    completed       boolean default false,
    primary key     (student_id, quest_id),
    foreign key     (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key     (quest_id) references Quest(QUEST_ID) on delete cascade
);

create table if not exists Resources(
    RESOURCE_ID             char(20),
    resource_name           text,
    resource_link           text,
    resource_description    text,
    primary key             (RESOURCE_ID)
);

create table if not exists Quest_Resources(
    quest_id        char(15),
    resource_id     char(20),
    primary key     (quest_id, resource_id),
    foreign key     (quest_id) references Quest(QUEST_ID) on delete cascade,
    foreign key     (resource_id) references Resources(RESOURCE_ID) on delete cascade
);

create table if not exists Inventory(
    ITEM_ID         char(9),
    item_type       char(1) check (item_type in ('A', 'W', 'F')) not null,
    item_name       varchar(30) not null,
    item_png_name   varchar(20) not null,
    item_price      int not null,
    primary key     (ITEM_ID)
);

create table if not exists Student_Inventory(
    student_id      char(9),
    item_id         char(9),
    primary key     (student_id, item_id),
    foreign key     (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key     (item_id) references Inventory(ITEM_ID) on delete cascade
);