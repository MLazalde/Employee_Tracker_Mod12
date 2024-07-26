// Import and require Pool (node-postgres)
const { Pool } = require("pg");
const inquirer = require("inquirer");

// Connect to database
//{} = object stored in pool
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: "postgres",
    // Enter PostgreSQL password
    password: "root",
    host: "localhost",
    database: "employeetracker_db",
  },
  console.log("Connected to the employeeTracker_db database!")
);

pool.connect();

async function promptManager() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update an employees' role",
      ],
    },
  ]);

  if (answers.menu === "View all departments") {
    pool.query(`SELECT * FROM department`, (err, result) => {
      if (err) throw err;
      console.table(result);
      promptManager();
    });
  }
  if (answers.menu === "View all roles") {
    pool.query(`SELECT * FROM role`, (err, result) => {
      if (err) throw err;
      console.table(result);
      promptManager();
    });
  }
  if (answers.menu === "View all employees") {
    pool.query(`SELECT * FROM employee`, (err, result) => {
      if (err) throw err;
      console.table(result);
      promptManager();
    });
  }
  if (answers.menu === "Add department") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "newDepartment",
        message: "What is the new department?",
      },
    ]);
    pool.query(
      `INSERT INTO department (department_name) VALUES (?)`,
      [answers.newDepartment],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        promptManager();
      }
    );
  }

  if (answers.menu === "Add role") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "newRole",
        message: "What is the new role?",
      },
      {
        type: "input",
        name: "newSalary",
        message: "What is the salary?",
      },
      {
        type: "input",
        name: "newDepartID",
        message: "What is the department ID?",
      },
    ]);
    pool.query(
      `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
      [answers.newRole, answers.newSalary, answers.newDepartID],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        promptManager();
      }
    );
  }

  if (answers.menu === "Add employee") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the new employees' first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the new employees' last name?",
      },
      {
        type: "input",
        name: "newRole",
        message: "What is the new employees' role ID?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the new employees' manager ID?",
      },
    ]);
    pool.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
      [answers.firstName, answers.lastName, answers.newRole, answers.managerID],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        promptManager();
      }
    );
  }

  if (answers.menu === "Update an employees' role") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "updateEmployee",
        message: "What is the employees' ID?",
      },
      {
        type: "input",
        name: "updateRole",
        message: "What is the role ID?",
      },
    ]);
    pool.query(
      `UPDATE employee SET role_id = ? WHERE id = ?`,
      [answers.updateRole, answers.updateEmployee],
      (err, result) => {
        if (err) throw err;
        console.table(result);
        promptManager();
      }
    );
  }
}

pool.connect((err) => {
  if (err) throw err;
  promptManager();
});
