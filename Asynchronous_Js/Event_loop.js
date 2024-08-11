//Event Loop and Task Queue

/*
Description: JavaScript uses an event loop and task queue to handle asynchronous operations. The event loop constantly checks the call stack and task queue, pushing tasks from the queue to the stack when the stack is empty.
 */


//Example: Understanding how setTimeout works is crucial to understanding the event loop.

//Pros: Provides a non-blocking, single-threaded model of execution.

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

