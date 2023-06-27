function calculateDifference() {
  var inputDate = document.getElementById("inputDate").value;
  var inputTime = document.getElementById("inputTime").value;

  // Obter a data e hora atual
  var currentDate = new Date();
  var currentTime = currentDate.getTime();

  // Obter a data e hora informadas pelo usuário
  var userDateTime = new Date(inputDate + " " + inputTime);
  var userDateTimeMillis = userDateTime.getTime();

  // Calcular a diferença em milissegundos
  var differenceMillis = userDateTimeMillis - currentTime;
  var isPast = false;

  // Verificar se a data informada já passou
  if (differenceMillis < 0) {
    differenceMillis = Math.abs(differenceMillis);
    isPast = true;
  }

  // Calcular os dias, horas, minutos e segundos
  var days = Math.floor(differenceMillis / (1000 * 60 * 60 * 24));
  differenceMillis -= days * (1000 * 60 * 60 * 24);
  var hours = Math.floor(differenceMillis / (1000 * 60 * 60));
  differenceMillis -= hours * (1000 * 60 * 60);
  var minutes = Math.floor(differenceMillis / (1000 * 60));
  differenceMillis -= minutes * (1000 * 60);
  var seconds = Math.floor(differenceMillis / 1000);

  // Formatar os valores menores que 10 com um zero à esquerda
  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Gerar a mensagem de resultado
  var message = isPast ? "Já se passaram " : "Faltam ";
  message += days + " dias, " + hours + " horas, " + minutes + " minutos e " + seconds + " segundos.";

  // Atualizar o elemento <p> com a mensagem de resultado
  document.getElementById("result").innerHTML = message;
}

setInterval(calculateDifference, 1000);