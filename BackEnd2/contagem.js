console.log("\n=== Números de 1 a 20 - Par ou Ímpar ===");

for (let i = 1; i <= 20; i++) {
  const tipo = i % 2 === 0 ? 'Par' : 'Ímpar';
  console.log(`${i} é ${tipo}`);
}