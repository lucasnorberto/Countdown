let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");


// Formatar data padão Brasileiro
let data = new Date();
function formatarData(data){
  let newDate = new Date(data);
  return`${newDate.getDate()}/ ${newDate.getMonth()+1}/ ${newDate.getFullYear()} ${newDate.getHours}:${newDate.getMinutes}`;
}


let i = setInterval(countdown,1000);
countdown();

function capturarData() {
    const inputDate = document.getElementById('input-date');
    const dateValue = inputDate.value;
    const dateObject = new Date(dateValue);
    if (isNaN(dateObject)) {
      console.log('Data inválida');
    } else {
      console.log('Data: ', dateObject);
    }
  }


 // Define a data de contagem regressiva
 const countdownDate = new Date("2022-10-30T23:59:59").getTime();
          

 // Atualiza o contador a cada segundo
 const countdownInterval = setInterval(() => {
   // Obtém a data atual
   const now = new Date().getTime();

   // Calcula a diferença entre a data atual e a data de contagem regressiva
   const distance = countdownDate - now;

   // Calcula os dias, horas, minutos e segundos restantes
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Exibe o resultado na página
   const countdownElement = document.getElementById("countdown");
   countdownElement.innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o fim do ano.`;

   // Para a contagem regressiva quando a data é alcançada
   if (distance < 0) {
     clearInterval(countdownInterval);
     countdownElement.innerHTML = "Feliz Ano Novo!";
   }
 }, 1000);




/* 

//Format: Date(year, month, day, hour, minute)
//Year is counter from 0 to 11
 let endDate = new Date(2023,12,31,23,59);
//Output value in milliseconds
let endTime = endDate.getTime();



function countdown(){
    let todayDate = new Date();
    //Output value in milliseconds
    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime;

    //60sec => 1000 milliseconds
    let oneMin = 60 * 1000;
    //1hr => 60 minutes
    let oneHr = 60 * oneMin;
    //1 day => 24 hours
    let oneDay = 24 * oneHr;

    //Function to format number if it is single digit
    let addZeroes = num => num < 10 ? `0${num}` : num;

    //If end dat is before today date
    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>Countdown had expired!</h1>`;
    }
    //If end date is not before today date
    else{
        //Calculating remaining days, hrs,mins ,secs
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        //Displaying Valurs
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}
 */