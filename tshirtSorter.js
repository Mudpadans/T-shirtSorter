// Write your solution below:
const tshirtSorter = (str) => {
    let sml = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 's') {
            sml.push(str[i])
        } 
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'm') {
            sml.push(str[i])
        } 
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'l') {
            sml.push(str[i])
        }
    }
    sorted = sml.join('')
    return sorted;
}

console.log(tshirtSorter('sdkjbvbiwehgfiwrgjeirogryellasmwef'));
