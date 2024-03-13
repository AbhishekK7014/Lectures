//creating promises:
//maggi bnani hai:
console.log("script start");
setTimeout(function() {
    const maggieLekarana = new Promise((resolve, reject) =>{
        setTimeout(function() {
           let dukaankhulahai = true;
           if(dukaankhulahai){
               resolve("Maggie mil gayi");
           }else{
               reject("Maggie nhi mili");
           }
        },2000);
    });
    maggieLekarana
    .then(function(maggie){
        console.log(maggie);
    })
    .catch(function(error){
        console.log(error);
    });
},2000)
console.log("script end");