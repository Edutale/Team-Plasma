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
('TESTQUE14', 'Python 3', 'Learn about importing and installing Python packages', 2, false),
('TESTQUE15', 'Java 4', 'Learn how to import Java packages', 3, false),
('TESTQUE16', 'Java 5', 'Learn about recursion in Java', 1, false),
('TESTQUE17', 'Java 3', 'Learn about RegEx in Java', 2, false),
('TESTQUE18', 'Python Data Cleaning', 'Learn how to use Pandas and NumPy to clean datasets', 3, false),
('TESTQUE19', 'Matplotlib', 'Learn about making graphs with Matplotlib', 3, false),
('TESTQUE20', 'HTML 1', 'Learn about basic HTML elements', 1, false),
('TESTQUE21', 'HTML 2', 'Learn about HTML forms', 2, false),
('TESTQUE22', 'Fun Facts Page', 'Create a page of fun facts about yourself using HTML!', 1, true),
('TESTQUE23', 'Accessibility with HTML', 'Learn about how to make HTML pages accessible', 3, false),
('TESTQUE24', 'CSS 1', 'Learn about basic CSS selectors', 1, false),
('TESTQUE25', 'CSS 2', 'Learn about CSS grid and flexbox layouts', 2, false),
('TESTQUE25', 'Fun Facts CSS', 'Add CSS to your fun facts page!', 2, true),
('TESTQUE26', 'CSS 3', 'Learn about CSS pseudo-classes', 3, false),
('TESTQUE27', 'SQL 1', 'Learn what SQL is all about!', 1, false),
('TESTQUE28', 'SQL 2', 'Learn the basic syntax of SQL', 1, false),
('TESTQUE29', 'noSQL Introduction', 'Learn about noSQL', 2, false),
('TESTQUE30', 'Entity Relationship Diagrams', 'Learn how to make an ER diagram', 2, false),
('TESTQUE31', 'SQL 3', 'Learn the different types of SQL keys', 2, false),
('TESTQUE32', 'SQL Injection', 'Learn what SQL injection is, and how to avoid it', 3, false),
('TESTQUE33', 'SQL 4', 'Learn the different types of SQL joins', 3, false),
('TESTQUE34', 'JavaScript 1', 'Introduction to the capabilities of JavaScript', 1, false),
('TESTQUE35', 'JavaScript 2', 'Learn the basic syntax of JavaScript', 1, false),
('TESTQUE36', 'JavaScript 3', 'Learn about the JavaScript DOM', 2, false),
('TESTQUE37', 'Swap Elements', 'Create a webpage that swaps two HTML elements at the puch of a button!', 2, true),
('TESTQUE38', 'JavaScript 4', 'Learn about the HTML script element', 2, false),
('TESTQUE39', 'JavaScript Frameworks 1', 'Learn about Angular, a JavaScript framework', 3, false),
('TESTQUE40', 'JavaScript Frameworks 2', 'Learn about React, a JavaScript framework', 3, false);

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
('TESTSKL03', 'TESTQUE14'),
('TESTSKL02', 'TESTQUE15'),
('TESTSKL02', 'TESTQUE16'),
('TESTSKL02', 'TESTQUE17'),
('TESTSKL03', 'TESTQUE18'),
('TESTSKL03', 'TESTQUE19'),
('TESTSKL04', 'TESTQUE20'),
('TESTSKL04', 'TESTQUE21'),
('TESTSKL04', 'TESTQUE22'),
('TESTSKL04', 'TESTQUE23'),
('TESTSKL04', 'TESTQUE24'),
('TESTSKL04', 'TESTQUE25'),
('TESTSKL04', 'TESTQUE26'),
('TESTSKL05', 'TESTQUE27'),
('TESTSKL05', 'TESTQUE28'),
('TESTSKL05', 'TESTQUE29'),
('TESTSKL05', 'TESTQUE30'),
('TESTSKL05', 'TESTQUE31'),
('TESTSKL05', 'TESTQUE32'),
('TESTSKL05', 'TESTQUE33'),
('TESTSKL06', 'TESTQUE34'),
('TESTSKL06', 'TESTQUE35'),
('TESTSKL06', 'TESTQUE36'),
('TESTSKL06', 'TESTQUE37'),
('TESTSKL06', 'TESTQUE38'),
('TESTSKL06', 'TESTQUE39'),
('TESTSKL06', 'TESTQUE40');

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
('RES000111', 'C++ Basics', 'https://www.w3schools.com/cpp/default.asp', 'Go from "C++ HOME" through "C++ Math" to complete this quest!'),
('RES000112', 'C++ GCD', 'https://www.geeksforgeeks.org/gcd-in-cpp/#', 'Follow this tutorial to complete this quest!'),
('RES000113', 'I/O Reference', 'https://www.w3schools.com/cpp/cpp_ref_iostream.asp', 'Reference page for File I/O in C++.'),
('RES000114', 'Official C++ File Tutorial', 'https://cplusplus.com/doc/tutorial/files/', 'Official reference page for File I/O in C++.'),
('RES000115', 'File I/O Youtube Video', 'https://www.youtube.com/watch?v=13TrhiKLZg8', 'Youtube video on File I/O.'),
('RES000116', 'W3Schools C++ Pointers', 'https://www.w3schools.com/cpp/cpp_pointers.asp', 'Tutorial with exercises on C++ pointers.'),
('RES000117', 'W3Schools C++ Classes', 'https://www.w3schools.com/cpp/cpp_classes.asp', 'Tutorial with exercises on C++ classes.'),
('RES000118', 'Java Basics', 'https://www.w3schools.com/java/default.asp', 'Go from "Java HOME" through "Java Math" to complete this quest!'),
('RES000119', 'Python Youtube Tutorial', 'https://www.youtube.com/watch?v=kqtD5dpn9C8', 'Youtube video on basic Python intallation and syntax.'),
('RES000120', 'Python Basics', 'https://www.w3schools.com/python/', 'Go from "Python HOME" through "Python Numbers" to complete this quest!'),
('RES000121', 'Python Classes', 'https://www.w3schools.com/python/python_classes.asp', 'Tutorial with exercises on Python classes.'),
('RES000122', 'Real Python Imports Tutorial', 'https://realpython.com/python-import/', 'Extensive guide to imports in Python.'),
('RES000123', 'Java Classes', 'https://www.w3schools.com/java/java_oop.asp', 'W3Schools page for Java Classes.'),
('RES000124', 'Java GCD', 'https://www.baeldung.com/java-greatest-common-divisor', 'Tutorial on how to create a GCD function in Java.'),
('RES000125', 'W3Schools - Java Packages', 'https://www.w3schools.com/java/java_packages.asp', 'Packages in Java, presented by W3Schools.'),
('RES000126', 'Java Packages and Import Statements - Java programming', 'https://www.youtube.com/watch?v=TggAErS2UtA', 'A video tutorial on Java imports and packages.'),
('RES000127', 'W3Schools - Java Regex', 'https://www.w3schools.com/java/java_regex.asp', 'Tutorial on how regular expressions work in Java.'),
('RES000128', 'Oracle - Java Regex Documentation', 'https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html', 'The official documentation on Regex in Java.'),
('RES000129', 'Programiz - Java Recursion', 'https://www.programiz.com/java-programming/recursion', 'A short tutorial on Java Recursion.'),
('RES000130', 'Introduction to Recursion (Data Structures & Algorithms #6)', 'https://www.youtube.com/watch?v=B0NtAFf4bvU', 'A general explanation video for recursion.'),
('RES000131', 'Real Python - Pythonic Data Cleaning', 'https://realpython.com/python-data-cleaning-numpy-pandas/', 'A tutorial on Pandas and NumPy.'),
('RES000132', 'Matplotlib Documentation', 'https://matplotlib.org/stable/index.html', 'The official documentation for Matplotlib.'),
('RES000133', 'Matplotlib Full Python Course', 'https://www.youtube.com/watch?v=OZOOLe2imFo', 'A thorough video on Matplotlib.'),
('RES000134', 'W3Schools - HTML Introduction', 'https://www.w3schools.com/html/default.asp', 'Go from "HTML HOME" through "HTML Elements" for this quest!'),
('RES000135', 'HTML Forms Tutorial', 'https://www.youtube.com/watch?v=zIN54lhJtQU', 'A 10 minute video on HTML forms.'),
('RES000136', 'W3Schools - HTML Forms', 'https://www.w3schools.com/html/html_forms.asp', 'The W3Schools page on HTML Forms.'),
('RES000137', 'Teach Access Tutorial', 'https://teachaccess.github.io/tutorial/', 'A comprehensive tutorial on ARIA and design principles.'),
('RES000138', 'Coolors Contrast Checker', 'https://coolors.co/contrast-checker/', 'An online, free contrast checker for WCAG conformance.'),
('RES000139', 'Mozilla CSS Basics', 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics', 'An introduction to CSS.'),
('RES000140', 'CSS Tutorial for Beginners', 'https://www.youtube.com/watch?v=J35jug1uHzE', 'A short introduction to CSS.'),
('RES000141', 'Flexbox Froggy', 'https://flexboxfroggy.com/', 'A fun game to learn CSS flexbox.'),
('RES000142', 'Flexbox vs Grid', 'https://www.freecodecamp.org/news/flexbox-vs-grid-in-css/', 'A short blog post on when to use Flexbox and Grid layout.'),
('RES000143', 'Mozilla Pseudo-classes', 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes', 'The official reference to CSS psuedo-classes.'),
('RES000144', 'W3Schools - Pseudo-selectors', 'https://www.w3schools.com/css/css_pseudo_classes.asp', 'W3Schools reference page on pseudo-selectors.'),
('RES000145', 'SQL Introduction Video', 'https://www.youtube.com/watch?v=wmiDdBG-yP4', 'A 15 minute video on SQL basics.'),
('RES000146', 'Why Learn SQL?', 'https://www.geeksforgeeks.org/reasons-why-you-should-learn-sql/', 'A short blog on why SQL is important to learn.'),
('RES000147', 'What is SQL?', 'https://www.youtube.com/watch?v=27axs9dO7AE', 'A short, playful video on what SQL is.'),
('RES000148', 'Khan Academy - SQL', 'https://www.khanacademy.org/computing/computer-programming/sql', 'Go through the "SQL basics" unit for this quest!'),
('RES000149', 'IBM - noSQL', 'https://www.ibm.com/topics/nosql-databases', 'IBM page on what noSQL is.'),
('RES000150', 'AWS - noSQL', 'https://aws.amazon.com/nosql/', 'AWS page on what noSQL is.'),
('RES000151', 'Lucidchart - ER Diagram', 'https://www.lucidchart.com/pages/er-diagrams', 'A short read on what ER diagrams are.'),
('RES000152', 'Geeks for Geeks - ER Model', 'https://www.geeksforgeeks.org/introduction-of-er-model/', 'A guide to creating ER diagrams.'),
('RES000153', 'SQL Keys Blogpost', 'https://medium.com/learning-sql/introduction-to-sql-keys-5473c0e4e649', 'A blog post on SQL keys.'),
('RES000154', 'PHP - SQL Injection', 'https://www.php.net/manual/en/security.database.sql-injection.php', 'The PHP manual page on SQL injection.'),
('RES000155', 'ArsTechnica - SQL Injection', 'https://arstechnica.com/information-technology/2016/10/how-security-flaws-work-sql-injection/', 'A short blog post on how SQL injection works.'),
('RES000156', 'W3Schools - SQL Joins', 'https://www.w3schools.com/sql/sql_join.asp', 'Go from "SQL Joins" to "SQL Full Join" to complete this quest!'),
('RES000157', 'Mozilla - JavaScript Guide', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', 'A comprehensive guide on JavaScript.'),
('RES000158', 'Mozilla - What is JavaScript?', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript', 'A short introduction to what JavaScript is all about!'),
('RES000159', 'Beginner JavaScript Video', 'https://www.youtube.com/watch?v=-4jokJpvFwc', 'A short video introducing JavaScript.'),
('RES000160', 'JavaScript Documentation', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'The official documentation for JavaScript.'),
('RES000161', 'Angular in 200 Seconds', 'https://www.youtube.com/watch?v=Ata9cSC2WpM', 'Speedy video through the capabilities of Angular, a JavaScript framework.'),
('RES000162', 'Angular Tutorial', 'https://angular.dev/tutorials/learn-angular', 'An official Angular tutorial, running straight in your browser!'),
('RES000163', 'Angular in 200 Seconds', 'https://blog.hubspot.com/website/react-js', 'Blog post on React, a JavaScript framework.'),
('RES000164', 'React Tutorial', 'https://react.dev/learn/tutorial-tic-tac-toe', 'An official React tutorial to make a Tic-Tac-Toe game.');


insert into Quest_Resources values
('TESTQUE01', 'RES000111'),
('TESTQUE02', 'RES000112'),
('TESTQUE03', 'RES000113'),
('TESTQUE03', 'RES000114'),
('TESTQUE04', 'RES000115'),
('TESTQUE05', 'RES000116'),
('TESTQUE06', 'RES000117'),
('TESTQUE07', 'RES000117'),
('TESTQUE08', 'RES000118'),
('TESTQUE09', 'RES000124'),
('TESTQUE10', 'RES000123'),
('TESTQUE11', 'RES000119'),
('TESTQUE11', 'RES000120'),
('TESTQUE12', 'RES000120'),
('TESTQUE13', 'RES000121'),
('TESTQUE14', 'RES000122');

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