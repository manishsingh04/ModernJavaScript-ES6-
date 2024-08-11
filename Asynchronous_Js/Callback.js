
//1.Callbacks

/*
Description: A callback is a function passed as an argument to another function and is executed after the completion of an asynchronous operation.
 */



function fetchedData(callback) {

    setTimeout(() => {
        console.log("Data Fetched");

        //call->Callback function ones the asynchronous operation is completed
        callback();

    }, 1000)
}

// fetchedData(() => {
//     console.log("Callback function is executed");
// })


fetchedData(function () {
    console.log("Callback function is executed");

})



/*NOTE:
Pros: Simple and straightforward.
Cons: Can lead to "callback hell" where multiple nested callbacks make the code difficult to read and maintain.
 */