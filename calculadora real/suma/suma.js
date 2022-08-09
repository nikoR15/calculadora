function sum() {
    try {
      var a = parseInt(document.getElementById("valor1s").value) || 0,
        b = parseInt(document.getElementById("valor2s").value) || 0;
  
      document.getElementById("totals").value = a + b;
    } catch (e) {}
  }