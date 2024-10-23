-- Tester 1 has "real" usage data
insert into Student values
('TESTSTU01', 'Tester 1', 'fake-email@email.com', '2024-09-01', 700, 6, 1000);

-- Tester 2 is a brand new account that can be used to both test cases
-- where there's no data, and to test stuff on a new account if needed.
insert into Student values
('TESTSTU02', 'Tester 2', 'faux-email@email.com', '2024-09-01');

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
('TESTQUEST000001', 'C++ 1', 'Learn the basic syntax of C++', 1),
('TESTQUEST000002', 'C++ 2', 'Make a simple GCD program in C++', 1),
('TESTQUEST000003', 'C++ 3', 'Learn about File I/O', 1),
('TESTQUEST000004', 'C++ 4', 'Make a simple transcriber', 2),
('TESTQUEST000005', 'C++ 5', 'Learn about C++ pointers', 2),
('TESTQUEST000006', 'C++ 6', 'Learn about C++ classes', 3),
('TESTQUEST000007', 'C++ 7', 'Create a class of playing cards', 3),
('TESTQUEST000008', 'Java 1', 'Learn the basic syntax of Java', 1),
('TESTQUEST000009', 'Java 2', 'Make a simple GCD program in Java', 1),
('TESTQUEST000010', 'Java 3', 'Learn about Java pointers', 2),
('TESTQUEST000011', 'Python 1', 'Learn the basic syntax of Python', 1),
('TESTQUEST000012', 'Python 2', 'Make a simple GCD program in Python', 1),
('TESTQUEST000013', 'Python 3', 'Learn about classes in Python', 2),
('TESTQUEST000014', 'Python 4', 'Learn about importing and installing Python packages', 1);

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
('TESTSTU01', 'TESTQUEST000001', 'Completed'),
('TESTSTU01', 'TESTQUEST000002', 'Completed'),
('TESTSTU01', 'TESTQUEST000003', 'Completed'),
('TESTSTU01', 'TESTQUEST000004', 'Completed'),
('TESTSTU01', 'TESTQUEST000008', 'Completed'),
('TESTSTU01', 'TESTQUEST000009', 'In progress'),
('TESTSTU01', 'TESTQUEST000010', 'In progress'),
('TESTSTU01', 'TESTQUEST000011', 'In progress');

insert into Resources values
('RES111', 'C++ Basics', 'https://www.w3schools.com/cpp/default.asp', 'Go through C++ HOME through C++ Math to complete this quest!'),
('RES112', 'C++ GCD', 'https://www.geeksforgeeks.org/gcd-in-cpp/#', 'Follow this tutorial to complete this quest!'),
('RES113', 'I/O Reference', 'https://www.w3schools.com/cpp/cpp_ref_iostream.asp', 'Reference page for File I/O in C++.'),
('RES114', 'Official C++ File Tutorial', 'https://cplusplus.com/doc/tutorial/files/', 'Official reference page for File I/O in C++.'),
('RES115', 'File I/O Youtube Video', 'https://www.youtube.com/watch?v=13TrhiKLZg8', 'Youtube video on File I/O.');

insert into Quest_Resources values
('TESTQUEST000001', 'RES111'),
('TESTQUEST000002', 'RES112'),
('TESTQUEST000003', 'RES113'),
('TESTQUEST000003', 'RES114'),
('TESTQUEST000004', 'RES115');