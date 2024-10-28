-- Tester 1 has "real" usage data
insert into Student values
('TESTSTU01', 'Tester 1', 'fake-email@email.com', '2024-09-01', 700, 6, 1000, 'D');

-- Tester 2 is a brand new account that can be used to both test cases
-- where there's no data, and to test stuff on a new account if needed.
insert into Student values
('TESTSTU02', 'Tester 2', 'faux-email@email.com', '2024-09-01');

-- Front-End, Back-End, and JavaScript are left as empty skills on purpose
insert into Skill values
('TESTSKL1', 'C++', 'One of the most famous programming languages, made as an extension of C.'),
('TESTSKL2', 'Java', 'An object-oriented language used in many embedded systems.'),
('TESTSKL3', 'Python', 'A beginner-friendly interpreted language commonly used for data science.'),
('TESTSKL4', 'Front-End', 'Fusing HTML, CSS, and JS together to make webpages.'),
('TESTSKL5', 'Back-End', 'Learn about SQL, database design, and security.'),
('TESTSKL6', 'JavaScript', 'The core scripting language used in many websites.');

insert into Student_Skill values
('TESTSTU01', 'TESTSKL1', 500),
('TESTSTU01', 'TESTSKL2', 100),
('TESTSTU01', 'TESTSKL3', 0),
('TESTSTU01', 'TESTSKL4', 0),
('TESTSTU01', 'TESTSKL5', 0),
('TESTSTU01', 'TESTSKL6', 0);

insert into Career values
('TESTCAR001', 'Web Development', 'Create stylish and responsive websites');

insert into Career_Skill values
('TESTCAR001', 'TESTSKL1', 1),
('TESTCAR001', 'TESTSKL2', 1),
('TESTCAR001', 'TESTSKL3', 1),
('TESTCAR001', 'TESTSKL4', 1),
('TESTCAR001', 'TESTSKL5', 1),
('TESTCAR001', 'TESTSKL6', 1);

insert into Student_Career values
('TESTSTU01', 'TESTCAR001'),
('TESTSTU02', 'TESTCAR001');

insert into Student_Checkin values
('TESTSTU01', '2024-09-10'),
('TESTSTU01', '2024-09-15'),
('TESTSTU01', '2024-09-22'),
('TESTSTU01', '2024-10-02'),
('TESTSTU01', '2024-10-04');

insert into Quest values
('TESTQUEST000001', 'C++ 1', 'Learn the basic syntax of C++', 1, false),
('TESTQUEST000002', 'C++ 2', 'Make a simple GCD program in C++', 1, true),
('TESTQUEST000003', 'C++ 3', 'Learn about File I/O', 1, false),
('TESTQUEST000004', 'C++ 4', 'Make a simple transcriber', 2, true),
('TESTQUEST000005', 'C++ 5', 'Learn about C++ pointers', 2, false),
('TESTQUEST000006', 'C++ 6', 'Learn about C++ classes', 3, false),
('TESTQUEST000007', 'C++ 7', 'Create a class of playing cards', 3, true),
('TESTQUEST000008', 'Java 1', 'Learn the basic syntax of Java', 1, false),
('TESTQUEST000009', 'Java 2', 'Make a simple GCD program in Java', 1, true),
('TESTQUEST000010', 'Java 3', 'Learn about Java classes', 2, false),
('TESTQUEST000011', 'Python 1', 'Learn the basic syntax of Python', 1, false),
('TESTQUEST000012', 'Python 2', 'Make a simple GCD program in Python', 1, true),
('TESTQUEST000013', 'Python 3', 'Learn about classes in Python', 2, false),
('TESTQUEST000014', 'Python 4', 'Learn about importing and installing Python packages', 1, false);

insert into Skill_Quest values
('TESTSKL1', 'TESTQUEST000001'),
('TESTSKL1', 'TESTQUEST000002'),
('TESTSKL1', 'TESTQUEST000003'),
('TESTSKL1', 'TESTQUEST000004'),
('TESTSKL1', 'TESTQUEST000005'),
('TESTSKL1', 'TESTQUEST000006'),
('TESTSKL1', 'TESTQUEST000007'),
('TESTSKL2', 'TESTQUEST000008'),
('TESTSKL2', 'TESTQUEST000009'),
('TESTSKL2', 'TESTQUEST000010'),
('TESTSKL3', 'TESTQUEST000011'),
('TESTSKL3', 'TESTQUEST000012'),
('TESTSKL3', 'TESTQUEST000013'),
('TESTSKL3', 'TESTQUEST000014');

insert into Student_Quest values
('TESTSTU01', 'TESTQUEST000001', true),
('TESTSTU01', 'TESTQUEST000002', true),
('TESTSTU01', 'TESTQUEST000003', true),
('TESTSTU01', 'TESTQUEST000004', true),
('TESTSTU01', 'TESTQUEST000008', true),
('TESTSTU01', 'TESTQUEST000009', false),
('TESTSTU01', 'TESTQUEST000010', false),
('TESTSTU01', 'TESTQUEST000011', false),
('TESTSTU01', 'TESTQUEST000006', false);

insert into Resources values
('RES111', 'C++ Basics', 'https://www.w3schools.com/cpp/default.asp', 'Go through C++ HOME through C++ Math to complete this quest!'),
('RES112', 'C++ GCD', 'https://www.geeksforgeeks.org/gcd-in-cpp/#', 'Follow this tutorial to complete this quest!'),
('RES113', 'I/O Reference', 'https://www.w3schools.com/cpp/cpp_ref_iostream.asp', 'Reference page for File I/O in C++.'),
('RES114', 'Official C++ File Tutorial', 'https://cplusplus.com/doc/tutorial/files/', 'Official reference page for File I/O in C++.'),
('RES115', 'File I/O Youtube Video', 'https://www.youtube.com/watch?v=13TrhiKLZg8', 'Youtube video on File I/O.'),
('RES116', 'W3Schools C++ Pointers', 'https://www.w3schools.com/cpp/cpp_pointers.asp', 'Tutorial with exercises on C++ pointers.'),
('RES117', 'W3Schools C++ Classes', 'https://www.w3schools.com/cpp/cpp_classes.asp', 'Tutorial with exercises on C++ classes.'),
('RES118', 'Java Basics', 'https://www.w3schools.com/java/default.asp', 'Go through Java HOME through Java Math to complete this quest!'),
('RES119', 'Python Youtube Tutorial', 'https://www.youtube.com/watch?v=kqtD5dpn9C8', 'Youtube video on basic Python intallation and syntax.'),
('RES120', 'Python Basics', 'https://www.w3schools.com/python/', 'Go through Python HOME through Python Numbers to complete this quest!'),
('RES121', 'Python Classes', 'https://www.w3schools.com/python/python_classes.asp', 'Tutorial with exercises on Python classes.'),
('RES122', 'Real Python Imports Tutorial', 'https://realpython.com/python-import/', 'Extensive guide to imports in Python.'),
('RES123', 'Java Classes', 'https://www.w3schools.com/java/java_oop.asp', 'W3Schools page for Java Classes.'),
('RES124', 'Java GCD', 'https://www.baeldung.com/java-greatest-common-divisor', 'Tutorial on how to create a GCD function in Java.');

insert into Quest_Resources values
('TESTQUEST000001', 'RES111'),
('TESTQUEST000002', 'RES112'),
('TESTQUEST000003', 'RES113'),
('TESTQUEST000003', 'RES114'),
('TESTQUEST000004', 'RES115'),
('TESTQUEST000005', 'RES116'),
('TESTQUEST000006', 'RES117'),
('TESTQUEST000007', 'RES117'),
('TESTQUEST000008', 'RES118'),
('TESTQUEST000009', 'RES124'),
('TESTQUEST000010', 'RES123'),
('TESTQUEST000011', 'RES119'),
('TESTQUEST000011', 'RES120'),
('TESTQUEST000012', 'RES120'),
('TESTQUEST000013', 'RES121'),
('TESTQUEST000014', 'RES122');

insert into Inventory values
('TESTITM01', 'A', 'Leather Armor', 'leather_armor.png', 100),
('TESTITM02', 'A', 'Iron Armor', 'iron_armor.png', 200),
('TESTITM03', 'A', 'Gold Armor', 'gold_armor.png', 300),
('TESTITM04', 'A', 'Diamond Armor', 'diamond_armor.png', 400),
('TESTITM05', 'A', 'Netherite Armor', 'netherite_armor.png', 500),
('TESTITM06', 'W', 'Wooden Sword', 'wooden_sword.png', 100),
('TESTITM07', 'W', 'Iron Sword', 'iron_sword.png', 200),
('TESTITM08', 'W', 'Gold Sword', 'gold_sword.png', 300),
('TESTITM09', 'W', 'Diamond Sword', 'diamond_sword.png', 400),
('TESTITM10', 'W', 'Netherite Sword', 'netherite_sword.png', 400),
('TESTITM11', 'F', 'Tabby Cat', 'tabby_cat.png', 300),
('TESTITM12', 'F', 'Tuxedo Cat', 'tabby_cat.png', 300),
('TESTITM13', 'F', 'Retriever', 'retriever.png', 300),
('TESTITM14', 'F', 'Basset Hound', 'basset_hound.png', 300),
('TESTITM15', 'F', 'Rabbit', 'rabbit.png', 500),
('TESTITM16', 'F', 'Duck', 'Duck.png', 500),
('TESTITM17', 'F', 'Turtle', 'turtle.png', 500),
('TESTITM18', 'F', 'Purple Turtle', 'purple_turtle.png', 800),
('TESTITM19', 'F', 'Dinosaur', 'dinosaur.png', 1000),
('TESTITM20', 'F', 'Horse', 'horse.png', 500);

insert into Student_Inventory values
('TESTSTU01', 'TESTITM01'),
('TESTSTU01', 'TESTITM04'),
('TESTSTU01', 'TESTITM07'),
('TESTSTU01', 'TESTITM11'),
('TESTSTU01', 'TESTITM16'),
('TESTSTU01', 'TESTITM20');

insert into Achievement values
('TESTACHY001', 'Quest Beginner', 'Complete your first quest', 100, 50, 'Quest', 1),
('TESTACHY002', 'Quest Enthusiast', 'Complete 5 quests', 500, 100, 'Quest', 5),
('TESTACHY003', 'Quest Master', 'Complete 10 quests', 1000, 200, 'Quest', 10),
('TESTACHY004', 'Skill Novice', 'Reach 100 XP in any skill', 200, 50, 'Skill', 100),
('TESTACHY005', 'Skill Expert', 'Reach 500 XP in any skill', 500, 100, 'Skill', 500),
('TESTACHY006', 'Daily Learner', 'Study for 2 hours in one day', 200, 50, 'Study', 120),
('TESTACHY007', 'Study Champion', 'Study for a total of 10 hours', 1000, 200, 'Study', 600),
('TESTACHY008', 'Pet Friend', 'Get your first pet', 100, 50, 'Collection', 1),
('TESTACHY009', 'Pet Collector', 'Collect 5 different pets', 500, 100, 'Collection', 5),
('TESTACHY010', 'Early Bird', 'Check in 5 days in a row', 300, 75, 'Misc', 5);

insert into Student_Achievement values
('TESTSTU01', 'TESTACHY001', 1, true, '2024-09-15 14:30:00'),
('TESTSTU01', 'TESTACHY002', 5, true, '2024-09-20 16:45:00'),
('TESTSTU01', 'TESTACHY003', 8, false, null),
('TESTSTU01', 'TESTACHY004', 100, true, '2024-09-18 11:20:00'),
('TESTSTU01', 'TESTACHY005', 500, true, '2024-10-01 09:15:00'),
('TESTSTU01', 'TESTACHY006', 120, true, '2024-09-25 17:00:00'),
('TESTSTU01', 'TESTACHY007', 450, false, null),
('TESTSTU01', 'TESTACHY008', 1, true, '2024-09-10 13:25:00'),
('TESTSTU01', 'TESTACHY009', 3, false, null),
('TESTSTU01', 'TESTACHY010', 3, false, null);

insert into Student_Progress values
('TESTSTU01', '2024-09-10', 200, 2, 180),
('TESTSTU01', '2024-09-15', 150, 1, 120),
('TESTSTU01', '2024-09-22', 300, 3, 240),
('TESTSTU01', '2024-10-02', 100, 1, 90),
('TESTSTU01', '2024-10-04', 250, 2, 150);