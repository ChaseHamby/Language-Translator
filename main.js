
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const spanish =
        {"Season": "Temporada",
        "Greetings": "Saludos", 
        "and": "y",
        "Happy": "Contento", 
        "Holidays": "Vacaciones"
        };

    
const translatedSpanishText = () => {
   let inputText = document.getElementById('textArea').value;
   let inputWords = inputText.split(' ');
   for (i = 0; i < inputWords.length; i++) {
      console.log(spanish[inputWords[i]]);
       
   }
};

const spanishButton = document.getElementById('Spanish');
spanishButton.addEventListener("click", translatedSpanishText);


