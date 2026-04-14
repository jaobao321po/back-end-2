function calcularSoma(numeros) {
    let soma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    

    return soma;
  }
  
  console.log("\n=== Soma de Elementos ===");
  const numeros = [10, 25, 33, 47, 52, 68, 79, 84];
  console.log(`Array: [${numeros.join(', ')}]`);
  console.log(`Soma total: ${calcularSoma(numeros)}`);