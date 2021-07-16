import inquirer from "inquirer"
import * as fs from "fs"

let questions = [
    {
        name:"name",
        message:"What is your name?",
        type:"input",
    },

    {
        name:"location",
        message:"Where are you located?",
        type:"input",
    },

    {
        name:"bio",
        message:"Enter some brief bio data.",
        type:"input",
    },

    {
        name:"social",
        message:"Enter your social media handles separated by comma's.",
        type:"input",
    },

    {
        name:"education",
        message:"Enter your education history separated by comma's.",
        type:"input",
    },
         
]

const formatted = ans =>{
    let str = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body style="background:#ccc">
        <h1>${ans.name}</h1>
    
        <h2>Location</h2>
        <p>${ans.location}</p>
        <h2>Bio</h2>
        <p>${ans.bio}</p>
        <h2>Social</h2>
        <ul>
           ${ans.social.split(",").map(item => `<li>${item}</li>`).join("")}        
        </ul>
        <h2>Education</h2>
        <ul>
          ${ans.education.split(",").map(item => `<li>${item}</li>`).join("")}         
        </ul>
    </body>
    </html>
    
    `;

    return str;
}


inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        fs.writeFile("portfolio.html", formatted(answers), (err)=>{
            if(err){
                return console.log(`There was an error writing the file: ${err}`)
            }
            console.log("The file was saved.")
        })
    })
    .catch((error)=>{
        if(error.isTtyError){
            console.log("The prompt could not be rendered")
        }else{
            console.log(`There was and error: ${error}`)
        }
    })
