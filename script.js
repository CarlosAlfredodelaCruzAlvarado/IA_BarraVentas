document.addEventListener("DOMContentLoaded", function() {
  var progressBar = document.getElementById("progress-bar");
  var team1Bar = document.getElementById("team1-bar");
  var team2Bar = document.getElementById("team2-bar");
  var ventasTotalesInput = document.getElementById("ventas-totales");
  var ventasEquipo1Input = document.getElementById("ventas-equipo1");
  var ventasEquipo2Input = document.getElementById("ventas-equipo2");
  var slides = document.querySelectorAll('.carousel img');
  var currentSlide = 0;

  function actualizarBarra() {
      var ventasTotales = parseInt(ventasTotalesInput.value) || 0;
      var alturaAlcanzada = Math.min((ventasTotales / 2000 * 100), 100);
      progressBar.style.height = alturaAlcanzada + '%';
  }

  function actualizarBarrasEquipos() {
    var ventasEquipo1 = parseInt(document.getElementById("ventas-equipo1").value) || 0;
    var ventasEquipo2 = parseInt(document.getElementById("ventas-equipo2").value) || 0;
    var totalVentas = ventasEquipo1 + ventasEquipo2;
  
    if (totalVentas > 0) {
      document.getElementById("team1-bar").style.width = `${(ventasEquipo1 / totalVentas) * 100}%`;
      document.getElementById("team1-percentage").textContent = `${Math.round((ventasEquipo1 / totalVentas) * 100)}%`;
  
      document.getElementById("team2-bar").style.width = `${(ventasEquipo2 / totalVentas) * 100}%`;
      document.getElementById("team2-percentage").textContent = `${Math.round((ventasEquipo2 / totalVentas) * 100)}%`;
    } else {
      document.getElementById("team1-bar").style.width = `0%`;
      document.getElementById("team1-percentage").textContent = `0%`;
      document.getElementById("team2-bar").style.width = `0%`;
      document.getElementById("team2-percentage").textContent = `0%`;
    }
  }




  function changeSlide() {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = 'block';
  }

  setInterval(changeSlide, 3000); // Cambia la imagen cada 3 segundos

  ventasTotalesInput.addEventListener('change', actualizarBarra);
  ventasEquipo1Input.addEventListener('change', actualizarBarrasEquipos);
  ventasEquipo2Input.addEventListener('change', actualizarBarrasEquipos);
});
