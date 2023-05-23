const printHello = () => {
    console.log('Hello!');
}

const executeAfterDelay = (time, printFunction) => {
    return setTimeout(printFunction, time * 1000)
}

// setTimeout(func, 2000)

executeAfterDelay(5, printHello);