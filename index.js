var inquirer = require('inquirer');

role_list_inquirer()
function role_list_inquirer(){

    inquirer
    .prompt([
        {name:"role_list",
        type: "list",
        message: "Choose a role to add.",
        choices: [ "Employee","Manager","Engineer","Intern"]
    },
    
])

    .then((answers) => {
        console.log(answers.role_list)
        if (answers.role_list == "Employee"){
            employee_inquirer()

        }
    })
}

function employee_inquirer() {
    inquirer
    .prompt([
        {name:"employee_name",
        type: "input",
        message: "Enter employee name"
    },
        {name:"employee_ID",
        type: "input",
        message: "Enter employee ID."
    },
        {name:"employee_email",
        type: "input",
        message: "Enter employee email."
    },

])

    .then((answers) => {
        console.log(answers.employee_name)
        console.log(answers.employee_ID)
        console.log(answers.employee_email)
    })
}