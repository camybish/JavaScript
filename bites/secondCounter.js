/*const counter = () => {
    let i = 0;
    while (i <= 60) {
        setInterval(console.log(i), 1000);
        i++;
    }
}
*/

let counter = 0;

const increment = () => {
    counter ++;
    console.log(counter)
};

setInterval(increment, 1000);