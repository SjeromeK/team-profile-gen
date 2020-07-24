const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// some kind of array that stores each individual team member

const teamMembers = [];

function startApp() {
  function startTeam() {
    console.log("Build your team");

    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: "input",
          name: "managerName",
          message: "Enter manager name",
        },
        {
          type: "input",
          name: "managerID",
          message: "Enter manager ID",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter manager email",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter office number",
        },
      ])
      .then((answers) => {
        // Use user feedback for... whatever!!

        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.officeNumber
        );

        teamMembers.push(manager);

        addTeamMember();
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
  }

  function addTeamMember() {
    console.log("add team member");
    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: "list",
          name: "nextEmployee",
          message: "Which employee would you like to add next?",
          choices: [
            "Engineeer",
            "Intern",
            new inquirer.Separator(),
            "Finished adding team members",
          ],
        },
      ])
      .then((answers) => {
        // Use user feedback for... whatever!!

        switch (answers.nextEmployee) {
          case "Engineeer":
            createEngineer();
            break;
          case "Intern":
            // code block
            createIntern();
            break;
          default:
            // code block
            generateProfile();
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
  }

  function createEngineer() {
    // inquirer function to capture Engineer data
    // call addTeamMember
    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: "input",
          name: "engineerName",
          message: "Enter engineer name",
        },
        {
          type: "input",
          name: "engineerID",
          message: "Enter engineer ID",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Enter engineer email",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Enter engineer GitHub username  ",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
       
       addTeamMember();
      });
      
      

  }

  function createIntern() {
    // inquirer function to capture Intern data
    // call addTeamMember

    inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "internName",
        message: "Enter intern name",
      },
      {
        type: "input",
        name: "internID",
        message: "Enter intern ID",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter intern email",
      },
      {
        type: "input",
        name: "schoolName",
        message: "Enter school name",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!

      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.officeNumber
      );

      teamMembers.push(manager);

      addTeamMember();
    })
    
}

  }

  function generateProfile() {
    // use templates to construct team.html
  }

  startTeam();
}

startApp();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
