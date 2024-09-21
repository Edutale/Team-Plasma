create table if not exists Student(
    STUDENT_ID char(9) primary key,
    Student_Name varchar(100) not null,
    Student_Email varchar
);

create table if not exists Major(
    MAJOR_ID char(4) primary key,
    Major_Name varchar(100) not null
);

create table if not exists Student_Major(
    student_id char(9),
    major_id char(4),
    primary key (student_id, major_id),
    foreign key (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key (major_id) references Major(MAJOR_ID) on delete cascade
);

create table if not exists Skill(
    SKILL_ID char(8) primary key,
    Skill_Name varchar(100) not null,
    Skill_Description text not null
);

create table if not exists Student_Skill(
    student_id char(9),
    skill_id char(8),
    Proficiency_Level int,
    primary key (student_id, skill_id),
    foreign key (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key (skill_id) references Skill(SKILL_ID)
);

create table if not exists Career(
    CAREER_ID char(10) primary key,
    Career_Name varchar(100),
    Career_Description text
);

create table if not exists Major_Career(
    major_id char(4),
    career_id char(10),
    Relevance_Score float,
    primary key (major_id, career_id),
    foreign key (major_id) references Major(MAJOR_ID) on delete cascade,
    foreign key (career_id) references Career(CAREER_ID) on delete cascade
);

create table if not exists Career_Skill(
    career_id char(10),
    skill_id char(8),
    Importance_Level float,
    primary key (career_id, skill_id),
    foreign key (career_id) references Career(CAREER_ID) on delete cascade,
    foreign key (skill_id) references Skill(SKILL_ID)
);

create table if not exists Quest(
    QUEST_ID char(15) primary key,
    Quest_Name varchar(255),
    Quest_Description text
);

create table if not exists Student_Quest(
    student_id char(9),
    quest_id char(15),
    Cur_Status text,
    primary key (student_id, quest_id)
    foreign key (student_id) references Student(STUDENT_ID) on delete cascade,
    foreign key (quest_id) references Quest(QUEST_ID) on delete cascade
);

create table if not exists Resources(
    RESOURCE_ID char(20),
    Resource_Name text,
    Link text,
    Resource_Description text
);

create table if not exists Quest_Resources(
    quest_id char(15),
    resource_id char(20),
    primary key (quest_id, resource_id),
    foreign key (quest_id) references Quest(QUEST_ID) on delete cascade,
    foreign key (resource_id) references Resources(RESOURCE_ID) on delete cascade
);