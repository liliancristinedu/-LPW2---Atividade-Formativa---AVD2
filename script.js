console.log("PARTE 1: Transformação com map()");

const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Calça", preco: 80 },
    { nome: "Tênis", preco: 120 },
    { nome: "Boné", preco: 40 }
];

const precosComDesconto = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.85
}));

console.log("Produtos com 15% de desconto:", precosComDesconto);
console.log("\n");

console.log("PARTE 2: Filtragem com filter()");

const produtosCaros = produtos.filter(produto => produto.preco > 60);

const produtosBaratos = produtos.filter(produto => produto.preco <= 60);

console.log("Produtos Caros (> 60):", produtosCaros);
console.log("Produtos Baratos (<= 60):", produtosBaratos);
console.log("\n");

console.log("PARTE 3: Redução com reduce()");

const pedidos = [
    { cliente: "Ana", total: 150 },
    { cliente: "Bruno", total: 200 },
    { cliente: "Carla", total: 100 },
    { cliente: "Daniel", total: 180 }
];

const totalPedidos = pedidos.reduce((acc, curr) => acc + curr.total, 0);

const mediaPedidos = totalPedidos / pedidos.length;

console.log("Valor total dos pedidos: R$", totalPedidos);
console.log("Média dos valores dos pedidos: R$", mediaPedidos);
console.log("\n");

console.log("PARTE 4: Problema Integrado");

const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 8 },
    { nome: "Diego", nota: 4 },
    { nome: "Eduarda", nota: 7 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);

const nomesAprovados = aprovados.map(aluno => aluno.nome);

const somaNotasTurma = alunos.reduce((acc, curr) => acc + curr.nota, 0);
const mediaTurma = somaNotasTurma / alunos.length;

console.log("Lista de objetos (Aprovados):", aprovados);
console.log("Lista de nomes (Aprovados):", nomesAprovados);
console.log("Média geral da turma:", mediaTurma);