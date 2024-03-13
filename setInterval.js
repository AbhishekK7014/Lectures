//setIntrenal func is used to execute the code repeatedly.
//1.
console.log("script start");
setInterval(() => {
    console.log("This is a set interval function inner");
}
,2000);
console.log("script end")

//2.
const inter = setIntrenal(() => {
    console.log("This is a set interval function inner");
}
,2000);
clearInterval(inter)


Write a program to execute setInterval values for 3 TimeRanges and use clearInterval to clear the sestInnterval value.
//3.
const interval = setInterval(function(){
    count++;
    console.log(`Message: ${count}`);
})


let count = 0
const interval = setInterval(function(){
    if(count<3){
        count++;
        console.log(`Message: ${count}`);
    }else{
        clearInterval(interval);
    }
},1000);