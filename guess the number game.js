let num=20;
let user= prompt("Guess the number");

while(user != 20)
{
    if(user<0 & user<20)
    {
        console.log("Close to number");
       user= prompt("Guess the number again");
    }
    else if(user>20 & user<=100)
    {
        console.log("choose a lesser number");
        user= prompt("Guess the number again");
    }
}

    console.log("rigth guess");
