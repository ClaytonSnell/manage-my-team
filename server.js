const { prompt } = require("inquirer");
const db = require("./config/connection")


db.connect(() => {
init()
})


function init() {
    prompt([
    {
      name: "prompt",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a new department",
        "Add a new role",
        "Add a new employee",
        "Update employee roles",
        "Exit"
      ]
    }])
    .then(function (response) {
      switch (response.prompt) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a new department":
          addDepartment();
          break;
        case "Add a new role":
          addRole();
          break;
        case "Add a new employee":
          addEmployee();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        case "exit":
          connection.end();
          break;
      }
    });
};



function viewDepartments() {
    db.query(
        "SELECT * FROM department;",(err,res) => {
            if (err) throw err
            console.table(res)
        init()
        }
    )
}

function viewRoles() {
    db.query(
        "SELECT * FROM roles;",(err,res) => {
            if (err) throw err
            console.table(res)
        init()
        }
    )
}

function viewEmployees() {
    db.query(
        "SELECT * FROM employee;",(err,res) => {
            if (err) throw err
            console.table(res)
        init()
        }
    )
}


function addEmployee() {
    db.query("SELECT * FROM role", (err,res) => {
        prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the employees first name?"
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the employees last name?"
            },
            {
                type: "list",
                name: "roleType",
                message: "What is the employees role?",
                choices: res.map(role => role.title)
            },
        ]).then(data => {
            const employeeTitle = res.find(role => role.title === data.roleType)
            db.query("insert into employee set ?", {
                first_name: data.firstName,
                last_name: data.lastName,
                role_id: employeeTitle.id
            })
         init()
        })

    })
    // for role table query the department from table
    // for add department just promp and do .then
}

function addRole() {
    db.query("SELECT * FROM department", (err,res) => {
        prompt([
            {
                type: "input",
                name: "newTitle",
                message: "What is the employees title?"
            },
            {
                type: "number",
                name: "newSalary",
                message: "What is the employees salary?"
            },
            {
                type: "list",
                name: "departmentType",
                message: "What is the employees department?",
                choices: res.map(department => department.title)
            },
        ]).then(data => {
            const newDepartment = res.find(department => department.title === data.departmentType)
            db.query("insert into department set ?", {
                title: data.newTitle,
                salary: data.newSalary,
                role_id: newDepartment.id
            })
         init()
        })

    })
    // for role table query the department from table
    // for add department just promp and do .then
}