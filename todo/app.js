// funcionalidad

function sum() {
    try {
      var a = parseInt(document.getElementById("valor1s").value) || 0,
        b = parseInt(document.getElementById("valor2s").value) || 0;
  
      document.getElementById("totals").value = a + b;
    } catch (e) {}
  }

function res() {
    try {
      var a = parseInt(document.getElementById("valor1r").value) || 0,
        b = parseInt(document.getElementById("valor2r").value) || 0;
  
      document.getElementById("totalr").value = a - b;
    } catch (e) {}
  }

function mul() {
    try {
      var a = parseInt(document.getElementById("valor1m").value) || 0,
        b = parseInt(document.getElementById("valor2m").value) || 0;
  
      document.getElementById("totalm").value = a * b;
    } catch (e) {}
  }

function div() {
    try {
      var a = parseInt(document.getElementById("valor1d").value) || 0,
        b = parseInt(document.getElementById("valor2d").value) || 0;
  
      document.getElementById("totald").value = a / b;
    } catch (e) {}
  }

function mod() {
    try {
      var a = parseInt(document.getElementById("valor1mo").value) || 0,
        b = parseInt(document.getElementById("valor2mo").value) || 0;
  
      document.getElementById("totalmo").value = a % b;
    } catch (e) {}
  }