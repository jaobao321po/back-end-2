const fs = require('fs');

function filtrarEstoque() {
  const dados = fs.readFileSync('produtos.txt', 'utf-8').trim().split('\n');
  
  const produtos = dados.map(linha => {
    const [nome, preco, estoque] = linha.split(',');
    return {
      nome: nome.trim(),
      preco: parseFloat(preco),
      estoque: parseInt(estoque)
    };
  });

  console.log("\n=== Produtos com Estoque > 0 ===");
  produtos.forEach(produto => {
    if (produto.estoque > 0) {
      console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)} - Estoque: ${produto.estoque}`);
    }
  });
}

filtrarEstoque();