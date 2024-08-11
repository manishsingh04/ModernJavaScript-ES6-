//Async/Await

/*
Description: async/await is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks synchronous.
 */



async function fetchData() {

    try {

        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data fetched");

                //resolve
                resolve("success")
            }, 1000)
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

fetchData()