const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "userLocation",
    message: "What is your location?",
  },
  {
    type: "input",
    name: "userLinkedIn",
    message: "What is your LinkedIn URL?",
  },
  {
    type: "input",
    name: "userGitHub",
    message: "What is your GitHub URL?",
  },
  {
    type: "input",
    name: "userBio",
    message: "What is your bio?",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    const HTML = renderHTML(answers);
    fs.appendFile("index.html", HTML, (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });

function renderHTML(obj) {
  const HTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>${obj.userName}</h1>
<ul>
<li>${obj.userLocation}</li>
<li>${obj.userLinkedIn}</li>
<li>${obj.userGitHub}</li>
<li>${obj.userBio}</li>
</ul>
</body>
</html>
    
    `;
  return HTML;
}
