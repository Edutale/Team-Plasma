insert into Student values
('111111111', 'Human', 'some@email.com', '2024-10-16'),
('000000000', 'Person', 'not@an.email', '2024-09-30'),
('999999999', 'Name', 'user@domain.com', '2024-09-07'),
('123456789', 'Student', 'student@school.edu', '2024-09-01'),
('987654321', 'TeachersPet', 'teacherspet@school.edu', '2024-10-10');

insert into Major values
('0000', 'Undecided'),
('0001', 'Computer Science'),
('0002', 'Computer Engineering');

insert into Student_Major values
('111111111', '0000'),
('000000000', '0000'),
('999999999', '0001'),
('123456789', '0002'),
('987654321', '0001'),
('987654321', '0002');

insert into Skill values
('00000001', 'CPP', 'CPP'),
('00000002', 'Java', 'Java'),
('00000003', 'Python', 'Python'),
('00000004', 'Animations', 'Animations'),
('00000005', 'Two Pointer', 'Two Pointer'),
('00000006', 'Hashmapping', 'Hashing'),
('00000007', 'Algorithms', 'Algorithms'),
('00000008', 'Scripting', 'Script'),
('00000009', 'Javascript', 'JSing'),
('00000010', 'SDL Library', 'Libbing');

insert into Student_Skill values
('111111111', '00000001', 17.2),
('111111111', '00000010', 9.9),
('111111111', '00000006', 11.23),
('111111111', '00000007', 4.5),
('000000000', '00000003', 2.1),
('000000000', '00000008', 2.9),
('999999999', '00000009', 99.9),
('999999999', '00000008', 41.5),
('999999999', '00000007', 13.9),
('999999999', '00000004', 16.8),
('123456789', '00000002', 20.2),
('123456789', '00000005', 10.1),
('123456789', '00000007', 15.15),
('987654321', '00000001', 50.0),
('987654321', '00000007', 50.0),
('987654321', '00000006', 50.0),
('987654321', '00000005', 50.0),
('987654321', '00000010', 50.0);

insert into Career values
('0A0A0A0A0A', 'DevOps', 'Some description'),
('AAAAA11111', 'Software Engineering', 'You engineer software'),
('BA10E00025', 'Computer Security Systems', 'Peasant');

insert into Major_Career values
('0000', '0A0A0A0A0A', 10.0),
('0000', 'AAAAA11111', 10.0),
('0000', 'BA10E00025', 10.0),
('0001', 'BA10E00025', 50.0),
('0001', 'AAAAA11111', 50.0),
('0001', '0A0A0A0A0A', 50.0),
('0002', '0A0A0A0A0A', 25.7),
('0002', 'AAAAA11111', 13.94),
('0002', 'BA10E00025', 71.1);

insert into Career_Skill values
('0A0A0A0A0A', '00000001', 15.4),
('0A0A0A0A0A', '00000002', 66.7),
('0A0A0A0A0A', '00000003', 66.7),
('AAAAA11111', '00000001', 50),
('AAAAA11111', '00000002', 50),
('AAAAA11111', '00000003', 50),
('AAAAA11111', '00000009', 60.5),
('AAAAA11111', '00000007', 43.2),
('BA10E00025', '00000001', 75),
('BA10E00025', '00000002', 65),
('BA10E00025', '00000003', 21.7),
('BA10E00025', '00000008', 89),
('BA10E00025', '00000007', 78);

insert into Quest values
('SWROKK2451WKF09', 'Learning CPP Basic Syntax', 'To learn the basic syntax of C++'),
('21398SANWU83NNW', 'Learning Python Basic Syntax', 'To learn the basic syntax of Python'),
('74917hdasn219sW', 'Basic Algorithms', 'To learn at least 3 basic algorithms, insert later idk'),
('QWERTY123456789', 'Advanced Data Structures', 'Learn and implement advanced data structures'),
('ASDFGH987654321', 'Web Development Basics', 'Create a simple website using HTML, CSS, and JavaScript');

insert into Student_Quest values
('111111111', 'SWROKK2451WKF09', 'In Progress'),
('000000000', '21398SANWU83NNW', 'Completed'),
('999999999', '74917hdasn219sW', 'Not Started'),
('123456789', 'QWERTY123456789', 'In Progress'),
('987654321', 'ASDFGH987654321', 'In Progress');

INSERT INTO Resources VALUES
('RES001', 'C++ Tutorial', 'https://www.cplusplus.com/doc/tutorial/', 'Comprehensive C++ programming tutorial'),
('RES002', 'Python Official Documentation', 'https://docs.python.org/3/', 'Official Python programming language documentation'),
('RES003', 'Introduction to Algorithms', 'https://mitpress.mit.edu/books/introduction-algorithms', 'Classic textbook on computer algorithms');

INSERT INTO Quest_Resources VALUES
('SWROKK2451WKF09', 'RES001'),
('21398SANWU83NNW', 'RES002'),
('74917hdasn219sW', 'RES003'),
('QWERTY123456789', 'RES003'),
('ASDFGH987654321', 'RES002');