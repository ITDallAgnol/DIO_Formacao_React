const alunos = [
    {
        nome: 'Bruno',
        idade: 36
    },
    {
        nome: 'Gustavo',
        idade: 9
    },
    {
        nome: 'Roberto',
        idade: 25
    },
]

// filter
const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.table(alunosFiltrados)

//find
const alunoRoberto = alunos.find(aluno => aluno.nome == 'Roberto')
console.log(alunoRoberto) // {nome: 'Roberto', idade: 25}

//findIndex
const alunoRobertoIndex = alunos.findIndex(aluno => aluno.nome == 'Roberto')
console.log(alunoRobertoIndex) // 2

//reduce
const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade
}, 0)
console.log(idades) // 70

//some
const idadesMenorQue10 = alunos.some((alunos) => alunos.idade < 10)
console.log(idadesMenorQue10)

//every
const idades2 = alunos.every((alunos) => alunos.idade < 90)
console.log(idades2)