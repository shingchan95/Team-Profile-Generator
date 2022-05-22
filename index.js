const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

let Manager_profile;
let intern_profile;
let Engineer_profile;

var inquirer = require('inquirer');
     inquirer
     .prompt([
        {name:"role_list",
        type: "list",
        message: "Choose a role to add.",
        choices: ["Manager","Engineer","Intern"]
        },

        {name:"employee_name",
        type: "input",
        message: "Enter employee name."
        },

        {name:"employee_id",
        type: "input",
        message: "Enter employee id."
        },

        {name:"employee_email",
        type: "input",
        message: "Enter employee email."
        },

    ]) 

    .then((employee_answer) => {
        if (employee_answer.role_list == "Manager"){
            employee_manager(employee_answer)

        }if (employee_answer.role_list == "Intern"){
            employee_intern(employee_answer)

        }if (employee_answer.role_list == "Engineer"){
            employee_engineer(employee_answer)
            
        }
    })
  

     let employee_manager = (employee_answer) => {
         inquirer
         .prompt([
      
            {name:"employee_officeNumber",
            type: "input",
            message: "Enter employee officeNumber."
            },
         ]) 

         .then ((answers) => {
            Manager_profile = new Manager(employee_answer.employee_name, employee_answer.employee_id, employee_answer.employee_email, answers.employee_officeNumber)
            console.log(Manager_profile)
            htmlrender()
        })
        
    }

     let employee_intern = (employee_answer) => {
         inquirer
         .prompt([

         {name:"employee_school",
         type: "input",
         message: "Enter employee school."
         }         

        ]) 
        .then ((answers) => {
            intern_profile = new Intern(employee_answer.employee_name, employee_answer.employee_id, employee_answer.employee_email, answers.employee_school)
            console.log(intern_profile)
        })
    }

     let employee_engineer = (employee_answer) => {
         inquirer
         .prompt([
      
         {name:"employee_github",
         type: "input",
         message: "Enter employee github."
         },
         ])

         .then ((answers) => {
            Engineer_profile = new Engineer(employee_answer.employee_name, employee_answer.employee_id, employee_answer.employee_email, answers.employee_github)
            console.log(Engineer_profile)
        })
    }
     

    const htmlrender = () => {
        const dataer = `<div class="team">
        <div class="card">
        <div class="card-header">
            <h2>${Manager_profile.employee_name}</h2>
            <p>Employee ID: ${Manager_profile.employee_id}</p>
            <p>Email: <a href="mailto:${Manager_profile.employee_email}">${Manager_profile.employee_email}</a></p>
            <p>Office Number: ${Manager_profile.employee_officeNumber}</p>
        </div>
        </div>`

        // const fs = require('fs');
        // fs.appendFile("./Develop/dist/team.html", data, (error) =>
        // error ? console.error(error) : console.log("file has been created")
        // );

        const fs = require('fs');
        fs.readFile("./Develop/dist/team.html",{encoding:'utf8', flag:'r'}, (error, data) =>
        error ? console.error(error) : console.log(data)
        );


    }