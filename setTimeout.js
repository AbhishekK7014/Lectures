console.log("script start");
function hello() {
    console.log("This is inner function");
}
setTimeout(hello, 2000); //call back function
function hello() {
    console.log("This is normal function");
}
console.log("script end");

//2. 
console.log("script start");
setTimeout(() => {
    console.log("This is inner function");

}
,2000);
console.log("script end");

//4. clear timeout
console.log("script start");
let a = setTimeout(() => {
    console.log("This is inner function");

}
,2000);
clearTimeout(a)
console.log("script end");