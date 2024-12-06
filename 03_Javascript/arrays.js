const alunos = [
    {
        nome: 'Bruno',
        idade: 36
    },
    {
        nome: 'Gustavo',
        idade: 9
    },
]

console.log(alunos[1].nome)  // Gustavo

// adicionando aluno
alunos.push({nome: 'João', idade: 35})

console.log(alunos[2].nome)