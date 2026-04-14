const fs = require('fs');

console.log("1. MÉDIA DE NOTAS DOS ALUNOS\n");

try {
  const dados = fs.readFileSync('alunos.txt', 'utf-8').trim();

  if (!dados) {
    console.log("Arquivo alunos.txt está vazio!");
    process.exit(1);
  }

  const linhas = dados.split('\n');

  linhas.forEach(linha => {
    if (linha.trim() === '') return;

    const [nome, ...notasStr] = linha.split(',').map(item => item.trim());
    const notas = notasStr.map(n => parseFloat(n)).filter(n => !isNaN(n));

    if (notas.length === 0) {
      console.log(`${nome || 'Linha inválida'} - Sem notas válidas`);
      return;
    }

    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    const mediaFormatada = media.toFixed(2);
    const status = media >= 7 ? 'APROVADO' : 'REPROVADO';

    console.log(`${nome} - Média: ${mediaFormatada} → ${status}`);
  });

} catch (erro) {
  if (erro.code === 'ENOENT') {
    console.error("Erro: Arquivo 'alunos.txt' não encontrado!");
    console.error("Crie o arquivo com o formato: Nome,nota1,nota2,nota3");
  } else {
    console.error("Erro:", erro.message);
  }
}