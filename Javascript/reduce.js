

const cart = [
    { productName: "Abóbora", valuePerKg: 5, kg: 1 },
    { productName: "Mamão", valuePerKg: 10, kg: 2 },
    { productName: "Xuxu", valuePerKg: 15, kg: 3 },
    { productName: "Limão", valuePerKg: 20, kg: 4 },
    { productName: "Abacate", valuePerKg: 25, kg: 5 },
    { productName: "Melancia", valuePerKg: 30, kg: 6 },
];

const finalValue = cart.reduce((acc, value) => {
    const result = value.valuePerKg * value.kg
    return acc + result
}, 0)

//console.log(` Sua compra ficou no valor de: ${finalValue}`)


const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acc, currentValue) => {
    return acc + currentValue
}, 58)

//console.log (`A soma deu: ${sum}`)


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },

    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadella',
        foundedOn: 1975,
    },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckerberg',
        foundedOn: 2004,
    },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: '845', foundedOn: 1976 }
]

const brands = companies.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(brands)
