-- Tester 1 has "real" usage data
insert into Student values
('TESTSTU01', 'Tester 1', 'fake-email@email.com', '2024-09-01', 700, 6, 600, 'D');

-- Tester 2 is a brand new account that can be used to both test cases
-- where there's no data, and to test stuff on a new account if needed.
insert into Student values
('TESTSTU02', 'Tester 2', 'faux-email@email.com', '2024-09-01');

-- Front-End, Back-End, and JavaScript are left as empty skills on purpose
insert into Skill values
('TESTSKL01', 'C++', 'One of the most famous programming languages, made as an extension of C.'),
('TESTSKL02', 'Java', 'An object-oriented language used in many embedded systems.'),
('TESTSKL03', 'Python', 'A beginner-friendly interpreted language commonly used for data science.'),
('TESTSKL04', 'Front-End', 'Fusing HTML, CSS, and JS together to make webpages.'),
('TESTSKL05', 'Back-End', 'Learn about SQL, database design, and security.'),
('TESTSKL06', 'JavaScript', 'The core scripting language used in many websites.');

insert into Student_Skill values
('TESTSTU01', 'TESTSKL01', 500),
('TESTSTU01', 'TESTSKL02', 100),
('TESTSTU01', 'TESTSKL03', 0),
('TESTSTU01', 'TESTSKL04', 0),
('TESTSTU01', 'TESTSKL05', 0),
('TESTSTU01', 'TESTSKL06', 0);

insert into Career values
('TESTCAR01', 'Web Development', 'Create stylish and responsive websites');

insert into Career_Skill values
('TESTCAR01', 'TESTSKL01', 1),
('TESTCAR01', 'TESTSKL02', 1),
('TESTCAR01', 'TESTSKL03', 1),
('TESTCAR01', 'TESTSKL04', 1),
('TESTCAR01', 'TESTSKL05', 1),
('TESTCAR01', 'TESTSKL06', 1);

insert into Student_Career values
('TESTSTU01', 'TESTCAR01'),
('TESTSTU02', 'TESTCAR01');

insert into Quest values
('TESTQUE01', 'C++ 1', 'Learn the basic syntax of C++', 1, false),
('TESTQUE02', 'C++ GCD Algorithm', 'Made a simple GCD program in C++', 1, true),
('TESTQUE03', 'C++ 2', 'Learn about File I/O', 1, false),
('TESTQUE04', 'C++ Input Transcriber', 'Made a simple transcriber in C++', 2, true),
('TESTQUE05', 'C++ 3', 'Learn about C++ pointers', 2, false),
('TESTQUE06', 'C++ 4', 'Learn about C++ classes', 3, false),
('TESTQUE07', 'Playing Card Project', 'Created a class of playing cards in C++', 3, true),
('TESTQUE08', 'Java 1', 'Learn the basic syntax of Java', 1, false),
('TESTQUE09', 'Java GCD Algorithm', 'Made a simple GCD program in Java', 1, true),
('TESTQUE10', 'Java 2', 'Learn about Java classes', 2, false),
('TESTQUE11', 'Python 1', 'Learn the basic syntax of Python', 1, false),
('TESTQUE12', 'Python GCD Algorithm', 'Made a simple GCD program in Python', 1, true),
('TESTQUE13', 'Python 2', 'Learn about classes in Python', 2, false),
('TESTQUE14', 'Python 3', 'Learn about importing and installing Python packages', 1, false);

insert into Skill_Quest values
('TESTSKL01', 'TESTQUE01'),
('TESTSKL01', 'TESTQUE02'),
('TESTSKL01', 'TESTQUE03'),
('TESTSKL01', 'TESTQUE04'),
('TESTSKL01', 'TESTQUE05'),
('TESTSKL01', 'TESTQUE06'),
('TESTSKL01', 'TESTQUE07'),
('TESTSKL02', 'TESTQUE08'),
('TESTSKL02', 'TESTQUE09'),
('TESTSKL02', 'TESTQUE10'),
('TESTSKL03', 'TESTQUE11'),
('TESTSKL03', 'TESTQUE12'),
('TESTSKL03', 'TESTQUE13'),
('TESTSKL03', 'TESTQUE14');

insert into Student_Quest values
('TESTSTU01', 'TESTQUE01', true),   -- beginner
('TESTSTU01', 'TESTQUE02', true),   -- beginner
('TESTSTU01', 'TESTQUE03', true),   -- beginner
('TESTSTU01', 'TESTQUE04', true),   -- intermediate
('TESTSTU01', 'TESTQUE08', true),   -- beginner
('TESTSTU01', 'TESTQUE09', false),
('TESTSTU01', 'TESTQUE10', false),
('TESTSTU01', 'TESTQUE11', false),
('TESTSTU01', 'TESTQUE06', false);

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
('TESTQUE01', 'RES111'),
('TESTQUE02', 'RES112'),
('TESTQUE03', 'RES113'),
('TESTQUE03', 'RES114'),
('TESTQUE04', 'RES115'),
('TESTQUE05', 'RES116'),
('TESTQUE06', 'RES117'),
('TESTQUE07', 'RES117'),
('TESTQUE08', 'RES118'),
('TESTQUE09', 'RES124'),
('TESTQUE10', 'RES123'),
('TESTQUE11', 'RES119'),
('TESTQUE11', 'RES120'),
('TESTQUE12', 'RES120'),
('TESTQUE13', 'RES121'),
('TESTQUE14', 'RES122');

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
('TESTSTU01', 'TESTITM02'),
('TESTSTU01', 'TESTITM06'),
('TESTSTU01', 'TESTITM20');

insert into Student_Progress values
('TESTSTU01', '2024-09-10', 20,  0, 60),
('TESTSTU01', '2024-09-15', 120, 1, 120),
('TESTSTU01', '2024-09-22', 220, 2, 240),
('TESTSTU01', '2024-10-02', 220, 1, 90),
('TESTSTU01', '2024-10-04', 120, 1, 150);