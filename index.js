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
            managerrender()
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
     


    const managerrender = () => {
        const {employee_name, id, email, officeNumber}=Manager_profile

        let html_data = `<div class="team">
        <div class="card">
        <div class="card-header">
        <h2>${employee_name}</h2>
        <p>Employee ID: ${id}</p>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <p>Office Number: ${officeNumber}</p>
        </div>
        </div>
        <!--managers-->`
        

        const fs = require('fs');
        fs.readFile("./Develop/dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>{
            if (err) {
                return console.log(err);
            }
            var myHtml = data.replace("<!--managers-->", html_data);
 
                fs.writeFile("./Develop/dist/team.html", myHtml, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });   
}


    // <div class="team">
    //         <div class="card">
    //         <div class="card-header">
    //             <h2>Manager</h2>
    //             <p>Employee ID: 1</p>
    //             <p>Email: <a href="mailto:manager@example.com">manager@example.com</a></p>
    //             <p>Office Number: 01234 567890</p>
    //         </div>
    //     </div>
    //         <div class="card">
    //         <div class="card-header">
    //             <h2>Engineer</h2>
    //             <p>Employee ID: 2</p>
    //             <p>Email: <a href="mailto:engineer@example.com">engineer@example.com</a></p>
    //             <p>GitHub: <a href="https://github.com/engineer" target="_blank">engineer</a></p>
    //         </div>
    //     </div>
    //         <div class="card">
    //         <div class="card-header">
    //             <h2>Intern</h2>
    //             <p>Employee ID: 3</p>
    //             <p>Email: <a href="mailto:intern@example.com">intern@example.com</a></p>
    //             <p>School: Intern School</p>
    //         </div>
    //     </div>
    //     </div>  