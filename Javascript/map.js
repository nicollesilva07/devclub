

const list=[
    { name: 'Josefina', vip: true },
    { name: 'Carlos', vip: false },
    { name: 'Milly', vip: true },
    { name: 'Jose', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Toretto', vip: false }
]

const newList = list.map (person =>{
    return{
        name: person.name,
        braceletColor: person.vip ? 'black': 'azul'
    
    }
})


const students = [
    { name: 'Josefina', finalNote: 10 },
    { name: 'Carlos', finalNote: 5 },
    { name: 'Milly', finalNote: 8 },
    { name: 'Jose', finalNote: 9 },
    { name: 'Ana', finalNote: 3 },
    { name: 'Toretto', finalNote: 2 }
]

const newNote = students.map(person=>{
        return{
            name: person.name,
            finalNote: person.finalNote>= 5 ? 'Promovido!': 'Reprovado!'
        }
})

console.log(newNote)