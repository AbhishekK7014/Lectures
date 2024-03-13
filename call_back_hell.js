//1. create order
//2. proceed order
//3. summary
//4. wallet update


const cart = ["shirt","rings","pants"];
//This structer of fumction as a nested is also called pyramidof doom
api.createOrder(function(){
    api.proceedToPayment(function(){
        api.Summary(function(){
            api.walletUpdated();
        });
    });
});

// function 1:
function fetchApiData(callback1) {
    setTimeout(function() {console.log("fetch Api Data");
    var data = {d1:"Some data from API is present"};
    callback1(data);
},1000)
}

// function 2:
function processApiData(data,callback2) {
    setTimeout(function() {console.log("processing Data!");
    var processeddata = data.d1.toUpperCase(data);
    callback2(processeddata);
},1000)
}

// function 3:
function displayData(processeddata) {
    setTimeout(function() {
    console.log("Data is being Display");
    processeddata();
    },1000)
    
}
//callback : due to next callback fetchApiData -> processApiData -> displayData
fetchApiData(function(data){
    processeddata(data,function(){
        displayData(processeddata);
    });
})