
//Promises

/*NOTE:
Description: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/



function fetchData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Data fetched");
            const data = 0// store asyn op. data

            //if successfully fetched data, then handle in resolve
            if (!data) {
                resolve("success")
            } else {
                reject("error")
            }

        }, 1000)
    })
}

fetchData()
    .then((result) => {
        console.log(result);

    })
    .catch((error) => {
        console.log(error);

    })