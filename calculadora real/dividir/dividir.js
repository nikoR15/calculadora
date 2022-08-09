function div() {
    try {
      var a = parseInt(document.getElementById("valor1d").value) || 0,
        b = parseInt(document.getElementById("valor2d").value) || 0;
  
      document.getElementById("totald").value = a / b;
    } catch (e) {}
  }