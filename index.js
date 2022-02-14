const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-generate');

const employees = []


function managerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter manager name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("\n" + "Please enter manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerId',
            message: "Enter manager ID",
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log("\n" + "Manager ID required")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter Managers Email",
            validate: emailInput => {
                if (emailInput.includes("@")) {
                    return true;
                } else {
                    console.log("\n" + "Enter a valid Email")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerOfficeNum',
            message: "Enter Managers office number",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("\n" + "Enter manager office number.")
                    return false;
                }
            }
        }
    ])
}

function addTeamMember() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: "Select Team member position",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }
    ])
        .then(answers => {
            if (answers.teamMember === 'Engineer') {
                engineerQuestions()
                    .then(answers => {
                        let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
                        employees.push(engineer)
                        addTeamMember()
                    })

            } else if (answers.teamMember === "Intern") {
                internQuestions()
                    .then(answers => {
                        let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
                        employees.push(intern)
                        addTeamMember()
                    })

            } else {
                console.log("Tea Profile has been created in 'dist' folder")
                console.log(employees)
                createTeam()
            }
        })
}

function engineerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter engineer name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("\n" + "Enter engineer name.")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'engineerId',
            message: "Enter engineer ID number",
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log("\n" + "Enter engineer id number.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter engineer email",
            validate: emailInput => {
                if (emailInput.includes("@")) {
                    return true;
                } else {
                    console.log("\n" + "Please enter a valid email.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter Engineer Github username",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("\n" + "Enter Engineer Github username")
                    return false;
                }
            }
        }
    ])
}

function internQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Enter interns name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("\n" + "Enter interns name")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'internId',
            message: "Enter Intern ID?",
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log("\n" + "Enter intern id number.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Entern Intern email",
            validate: emailInput => {
                if (emailInput.includes("@")) {
                    return true;
                } else {
                    console.log("\n" + "Enter Intern email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter interns school",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("\n" + "Enter Interns school")
                    return false;
                }
            }
        }
    ])
}

 
managerQuestions()
    .then(answers => {
      
        let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum)
        employees.push(manager)
    })
  
    .then(addTeamMember)

function createTeam() {
    fs.writeFile("./dist/team-profile.html", generatePage(employees), (err) => {
        if (err) throw err
    })

    fs.copyFile("./src/styles.css", "./dist/styles.css", (err) => {
        if (err) throw err
    })
}