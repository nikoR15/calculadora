// para el archivo js 

function mul() {
  try {
    var a = parseInt(document.getElementById("valor1m").value) || 0,
      b = parseInt(document.getElementById("valor2m").value) || 0;

    document.getElementById("totalm").value = a * b;
  } catch (e) {}
}
