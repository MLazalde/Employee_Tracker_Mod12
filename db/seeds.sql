-- Insert into department
INSERT INTO department (department_name)
VALUES ('Pharmacy'),
       ('Produce'),
       ('Grocery'),
       ('Bakery'),
       ('Deli');

-- Insert into role
INSERT INTO role (title, salary, department_id)
VALUES ('Pharmacist', 120000, 1),
       ('Produce Associate', 23000, 2),
       ('Grocery Associate', 25000, 3),
       ('Bakery Associate', 28000, 4),
       ('Deli Associate', 24000, 5),
       ('Pharmacy Manager', 100000, 1),
       ('Produce Manager', 100000, 2),
       ('Grocery Manager', 100000, 3),
       ('Bakery Manager', 100000, 4),
       ('Deli Manager', 100000, 5);

-- Verify the role table data
SELECT * FROM role;

-- Insert into employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Owen', 'Olson', 6, NULL),
       ('Joey', 'Bahama', 7, NULL),
       ('Rick', 'Sanchez', 8, NULL),
       ('Morty', 'Sanchez', 9, NULL),
       ('Beth', 'Sanchez', 10, NULL),
       ('SpongeBob', 'Squarepants', 1, 6),
       ('Patrick', 'Star', 2, 7),
       ('Squidward', 'Tenticles', 3, 8),
       ('Eugene', 'Krabs', 4, 9),
       ('Sandy', 'Cheeks', 5, 10);

-- Verify the employee table data
SELECT * FROM employee;
