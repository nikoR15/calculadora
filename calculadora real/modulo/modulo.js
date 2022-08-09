function mod() {
    try {
      var a = parseInt(document.getElementById("valor1mo").value) || 0,
        b = parseInt(document.getElementById("valor2mo").value) || 0;
  
      document.getElementById("totalmo").value = a % b;
    } catch (e) {}
  }