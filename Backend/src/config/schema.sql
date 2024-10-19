create table if not exists Student(
    STUDENT_ID          char(9),
    student_name        varchar(100) not null,
    student_email       varchar,
    student_join_date   date,
    total_exp           int default 0,
    student_lvl         int default 1,
    student_money       int default 0,
    primary key         (STUDENT_ID)
);

create table if not exists Major(
    MAJOR_ID        char(4),
    major_name      varchar(100) not null,
    primary key     (MAJOR_ID)
);

create table if not exists Student_Major(
    student_id      char(9),
    major_id        char(4),
    primary key     (student_id, major_id),
    foreign key     (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key     (major_id) references Major(MAJOR_ID) on delete cascade
);

create table if not exists Skill(
    SKILL_ID            char(8),
    skill_name          varchar(100) not null,
    skill_description   text not null
    primary key         (SKILL_ID)
);

create table if not exists Student_Skill(
    student_id          char(9),
    skill_id            char(8),
    skill_xp            int,
    primary key         (student_id, skill_id),
    foreign key         (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key         (skill_id) references Skill(SKILL_ID)
);

create table if not exists Career(
    CAREER_ID           char(10),
    career_name         varchar(100),
    career_description  text,
    primary key         (CAREER_ID)
);

create table if not exists Major_Career(
    major_id            char(4),
    career_id           char(10),
    relevance_score     float,
    primary key         (major_id, career_id),
    foreign key         (major_id) references Major(MAJOR_ID) on delete cascade,
    foreign key         (career_id) references Career(CAREER_ID) on delete cascade
);

create table if not exists Career_Skill(
    career_id               char(10),
    skill_id                char(8),
    importance_level        float,
    primary key             (career_id, skill_id),
    foreign key             (career_id) references Career(CAREER_ID) on delete cascade,
    foreign key             (skill_id) references Skill(SKILL_ID)
);

create table if not exists Quest(
    QUEST_ID            char(15),
    quest_name          varchar(255),
    quest_description   text,
    primary key         (QUEST_ID)
);

create table if not exists Student_Quest(
    student_id      char(9),
    quest_id        char(15),
    cur_status      text,
    primary key     (student_id, quest_id),
    foreign key     (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key     (quest_id) references Quest(QUEST_ID) on delete cascade
);

create table if not exists Resources(
    RESOURCE_ID             char(20),
    resource_name           text,
    resource_link           text,
    resource_description    text,
    primary key             RESOURCE_ID
);

create table if not exists Quest_Resources(
    quest_id        char(15),
    resource_id     char(20),
    primary key     (quest_id, resource_id),
    foreign key     (quest_id) references Quest(QUEST_ID) on delete cascade,
    foreign key     (resource_id) references Resources(RESOURCE_ID) on delete cascade
);

create table if not exists Reminder_Frequency(
    student_id      char(9),
    frequency       varchar,
    primary key     (student_id),
    foreign key     (student_id) references Student(STUDENT_ID) on delete cascade
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