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

// Seleciona o elemento input e o elemento contador
const input = document.getElementById('data-hora');
const contador = document.getElementById('contador');

// Define a variável para o intervalo do contador
let intervalo;

// Função para atualizar o contador
function atualizarContador() {
  // Obtém a data final a partir do valor do input
  const dataFinal = new Date(input.value);

  // Calcula a diferença entre a data final e a data atual em milissegundos
  const diferenca = dataFinal - new Date();

  // Se a diferença for menor que zero, exibe a mensagem e para o intervalo
  if (diferenca < 0) {
    contador.textContent = 'Tempo esgotado!';
    clearInterval(intervalo);
    return;
  }

  // Calcula as horas, minutos e segundos a partir da diferença
  const horas = Math.floor(diferenca / 1000 / 60 / 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  // Se a diferença em horas for maior ou igual a 24, exibe o contador com a informação de dias e horas
  if (horas >= 24) {
    const dias = Math.floor(horas / 24);
    const horasRestantes = horas % 24;
    contador.textContent = `${dias} dia(s) e ${horasRestantes.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  } else {
    // Exibe o contador apenas com as horas, minutos e segundos
    contador.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  }
}

// Adiciona um ouvinte de eventos para o input, que chama a função de atualização do contador
input.addEventListener('input', () => {
  // Para o intervalo anterior, se houver
  clearInterval(intervalo);
  // Chama a função de atualização do contador inicialmente para exibir o contador imediatamente após a entrada do usuário
  atualizarContador();
  // Inicia o intervalo do contador, que chama a função de atualização a cada segundo
  intervalo = setInterval(atualizarContador, 1000);
});
