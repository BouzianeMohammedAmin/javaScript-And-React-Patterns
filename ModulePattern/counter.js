
let count = 0; //private 
export const counter = {
    incriment: () => {
        count++
        console.log(count) 
    },
    decrement: () => {
        count--
        console.log(count) 
    }
}