// const datas = [
//     {
//         name: "Manish",
//         age: 22
//     },
//     {
//         name: "Rithvik",
//         age: 20
//     }
// ];



// const fetchData = () => {

//     setTimeout(() => {

//         const container = document.createElement('ul');
//         //fetched all datas

//         datas.forEach((item) => {
//             const listItems = document.createElement('li');
//             listItems.textContent = `${item.name}, ${item.age}`
//             container.appendChild(listItems)

//         })

//         document.body.innerHTML = '';
//         document.body.appendChild(container);
//     }, 1000)

// }

// // Call the function to fetch and display the data
// // fetchData();

// const createData = (newData, callback) => {

//     setTimeout(() => {
//         datas.push(newData);

//         //call, callabck function
//         callback()
//     }, 2000)
// }

// createData({ name: "Ved", age: 7 }, fetchData)



//Promise


// const datas = [
//     {
//         name: "Manish",
//         age: 22
//     },
//     {
//         name: "Rithvik",
//         age: 20
//     }
// ];



// const fetchData = () => {

//     setTimeout(() => {

//         const container = document.createElement('ul');
//         //fetched all datas

//         datas.forEach((item) => {
//             const listItems = document.createElement('li');
//             listItems.textContent = `${item.name}, ${item.age}`
//             container.appendChild(listItems)

//         })

//         document.body.innerHTML = '';
//         document.body.appendChild(container);
//     }, 1000)

// }

// // Call the function to fetch and display the data
// // fetchData();

// const createData = (newData, callback) => {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             datas.push(newData);

//             let flag = false;
//             if (!flag) {
//                 resolve();
//             } else {
//                 reject("Something went wrong!")
//             }

//         }, 2000)
//     })
// }

// createData({ name: "Ved", age: 7 })
//     .then(fetchData)
//     .catch(error => console.log("error")
//     )





//Async/Await




const datas = [
    {
        name: "Manish",
        age: 22
    },
    {
        name: "Rithvik",
        age: 20
    }
];



const fetchData = () => {

    setTimeout(() => {

        const container = document.createElement('ul');
        //fetched all datas

        datas.forEach((item) => {
            const listItems = document.createElement('li');
            listItems.textContent = `${item.name}, ${item.age}`
            container.appendChild(listItems)

        })

        document.body.innerHTML = '';
        document.body.appendChild(container);
    }, 1000)

}

// Call the function to fetch and display the data
// fetchData();

const createData = (newData, callback) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            datas.push(newData);

            let flag = false;
            if (!flag) {
                resolve();
            } else {
                reject("Something went wrong!")
            }

        }, 2000)
    })
}

async function start() {
    await createData({ name: "Avik", age: 8 });
    fetchData();

}
start()

