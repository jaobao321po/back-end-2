function buscarTermo(array, termo) {
    const encontrado = array.some(item => 
      item.toLowerCase() === termo.toLowerCase()
    );
    
    return encontrado 
      ? `O termo "${termo}" foi encontrado no array.` 
      : `O termo "${termo}" NÃO foi encontrado.`;
  }
  
  
  const frutas = ["Maçã", "Banana", "Laranja", "Abacaxi", "Morango"];
  
  console.log("\n=== Busca em Array ===");
  console.log(buscarTermo(frutas, "banana"));  
  console.log(buscarTermo(frutas, "uva"));      
  console.log(buscarTermo(frutas, "ABACAXI")); 