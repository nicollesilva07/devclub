const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}


cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
   finalValue = finalValue + (value - discount)
    } else{
        finalValue += value
    }
    
    
})

console.log(finalValue)