const prompt = require('prompt-sync')();
let num=20;
let user= parseInt(prompt("Guess the number"));

while(user != 20)
{
    if(user>0 && user<20)
    {
        console.log("Close to number");
       user= parseInt(prompt("Guess the number again"));
    }
    else if(user>20 && user<=100)
    {
        console.log("choose a lesser number");
        user= parseInt(prompt("Guess the number again"));
    }
}

    console.log("rigth guess");
