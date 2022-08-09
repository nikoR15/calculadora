function res() {
    try {
      var a = parseInt(document.getElementById("valor1r").value) || 0,
        b = parseInt(document.getElementById("valor2r").value) || 0;
  
      document.getElementById("totalr").value = a - b;
    } catch (e) {}
  }