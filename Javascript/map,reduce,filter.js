


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 333, CEO: 'Mark Zuckerbeg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundados abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE

const marketValueOfOldCompanies = companies.map((company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company
})
    .filter(company => company.foundedOn < 1990)
    .reduce((acc, company) => {
        return acc + company.marketValue
    }, 0)

//console.log(marketValueOfOldCompanies)



//Outra forma de escrever o codigo:

const add10Percent = (company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company
}

const filterCompanies = (company => company.foundedOn < 1990)

const totalMarketValue = (acc, company) => acc + company.marketValue

const marketValueOldCompanies = companies
    .map(add10Percent)
    .filter(filterCompanies)
    .reduce(totalMarketValue, 0)

//console.log(marketValueOfOldCompanies)


// Outro desafio: 
// Sutrair 10% de valor de mercado a todas as companhias 
// Filtrar somente companhias fundadas depois de 1980
// Somar o valor de mercado das restantes

const Institution = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 333, CEO: 'Mark Zuckerbeg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

const marketValueOfOldInstitution = companies.map((Institution) => {
    Institution.marketValue = Institution.marketValue + (Institution.marketValue / 10)
return Institution
})

.filter(Institution => Institution.foundedOn < 1980)
    .reduce((acc, Institution) => acc + Institution.marketValue, 0)


//console.log(marketValueOfOldInstitution)