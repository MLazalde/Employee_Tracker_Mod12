INSERT INTO department (department_name)
VALUES ("Pharmacy"),
       ("Produce"),
       ("Grocery"),
       ("Bakery"),
       ("Deli");

INSERT INTO role (title, salary, department_id)
VALUES ("Pharmacist", 120000, 1),
       ("Produce Associate", 23000, 2),
       ("Grocery Associate", 25000, 3),
       ("Bakery Associate", 28000, 4),
       ("Deli Associate", 24000, 5),
       ("Pharmacy Manager", 100000, 1),
       ("Produce Manager", 100000, 2),
       ("Grocery Manager", 100000, 3),
       ("Bakery Manager", 100000, 4),
       ("Deli Manager", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Owen", "Olson", 6, NULL),
       ("Joe", "Mama", 7, NULL),
       ("Rick", "Sanchez", 8, NULL),
       ("Morty", "Sanchez", 9, NULL),
       ("Beth", "Sanchez", 10, NULL),
       ("SpongeBob", "Squarepants", 1, 1),
       ("Patrick", "Star", 2, 2),
       ("Squidward", "Tenticles", 3, 3),
       ("Eugene", "Krabs", 4, 4),
       ("Sandy", "Cheeks", 5, 5);

