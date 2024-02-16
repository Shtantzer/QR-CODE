//1. ran default node packages where -y indicates YES for all prompts (npm init -y)
//2. installed inquirer, qr-image (npm i inquirer qr-image)
//3. set package import type to "modules" in package.json ("type" : "module",)
//4. using the default inquirer prompt from the documentation to obtain user input
//5. writing "questions" in the "message" JS object inside the .prompt block (message : "Enter your URL:", name : "URL")
//6. name entry in "name"


//7. in the qr-image documentation is the require usage format, so it should be converted to module based
//8. pasted the rest of the code to create the qr-image
//9. removed options svg because by default the image is saved in png format which is what I need
//10. it is necessary to import the fs (file system) native module because the qr.img file needs to be saved on our computer

//STEPS:
// 1. Use the inquirer npm package to get user input.
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.

//ADDITIONAL STEPS:
// 4. Improve this project by uploading it to github pages, it is necessary to create HTML, CSS
// 5. Make a simple URL input
// 6. After entering the URL, a corresponding QR is generated
// 7. Enable print? download.png?

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

function qrGenerator (req, res, next) {
  console.log(req.body);
}

app.use(qrGenerator);

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/* inquirer
  .prompt([
   { message : "Enter your URL:",
   name : "URL" }, // must be the same as below in "answers"
  ])
  .then((answers) => {
    const url = answers.URL; //property ".URL" after answers must be the same as above in "name" 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); */


