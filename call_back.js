function first() {
    console.log("This is first function");
}
function second() {
    console.log("This is second function");
    callback();
}
//calling
first();
second();


//2.callback
function first() {
    console.log("This is first function");
}
function second(callback) {
    console.log("This is second function");
    callback();
}
//calling
second(first); //callback