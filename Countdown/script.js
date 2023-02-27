function calcular() {
  // Obtem as duas datas e horas
  const date1 = new Date(document.getElementById('date1').value);
  const time1 = document.getElementById('time1').value;
  const date2 = new Date(document.getElementById('date2').value);
  const time2 = document.getElementById('time2').value;

  // Calcula a diferença entre as datas em milissegundos
  const diffInMs = date2.getTime() - date1.getTime();

  // Calcula o número de dias e horas de diferença
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Exibe o resultado
  const resultadoContainer = document.getElementById('resultado-container');
  resultadoContainer.innerHTML = `<p>A diferença é de ${diffInDays} dias e ${diffInHours} horas`;

  // Adiciona as horas e minutos restantes na mensagem de resultado
  if (diffInMs > 0) {
    const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    resultadoContainer.innerHTML += `<p>e ${diffInMinutes} minutos.</p>`;
  } else {
    resultadoContainer.innerHTML += `<p>.</p>`;
  }
  resultadoContainer.style.display = 'block';
}
