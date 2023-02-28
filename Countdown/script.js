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
    // Se a diferença em horas for menor que 24, exibe apenas as horas, minutos e segundos
    contador.textContent = `0 dias ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
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
