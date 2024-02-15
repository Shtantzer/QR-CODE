//1. pokrenuti defaultne node pakete gdje -y oznacuje YES za sve prompte (npm init -y) 
//2. instalirao inquirer, qr-image (npm i inquirer qr-image)
//3. postavio tip importanja paketa u module u package.json ("type" : "module",)
//4. koristenje defaultnog inquirer prompta iz dokumentacije za pribavljanje korisnickog unosa
//5. upis "pitanja" u "message" JS objekt unutar .prompt bloka (message : "Enter your URL:", name : "URL")
//6. upis naziva u "name"

//7. u qr-image dokumentaciji je require usage format tako da se to treba prenamijenit u module based
//8. zalijepio ostatak koda za izradu qr-imagea
//9. maknuo sam options svg jer se defaultno slika sprema u png formatu 
//10. potrebno je importat fs (file system) native module jer treba spremiti qr.img file na nas komp


// 1. Use the inquirer npm package to get user input.
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
   { message : "Enter your URL:",
   name : "URL" }, // mora biti isti kao dolje u "answers"
  ])
  .then((answers) => {
    const url = answers.URL; //property ".URL" poslije answers mora biti isti kao gore u "name"  
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


