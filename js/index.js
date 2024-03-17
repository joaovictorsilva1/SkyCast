document.addEventListener('DOMContentLoaded', function() {
  const chaveAPI = 'b55ea4a1a3f74a0893c234328241703';
  const cidade = 'Sao Paulo'; // Substitua pela cidade desejada

  fetch(`http://api.weatherapi.com/v1/current.json?key=${chaveAPI}&q=${cidade}&lang=pt`)
    .then(response => response.json())
    .then(data => {
      // Atualiza os elementos HTML com os dados meteorológicos
      document.getElementById('localizacao').textContent = data.location.name;
      document.getElementById('temperatura').textContent = data.current.temp_c;
      document.getElementById('condicao').textContent = data.current.condition.text;
      document.getElementById('velocidade-vento').textContent = data.current.wind_kph;
    })
    .catch(error => {
      console.error('Erro ao obter os dados meteorológicos:', error);
    });
});