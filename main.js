
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
 
const french =
        {"Season": "Saison",
        "Greetings": "Salutations", 
        "and": "et",
        "Happy": "Content", 
        "Holidays": "Vacances"
        };

const italian =
        {"Season": "Stagione",
        "Greetings": "Saluti", 
        "and": "e",
        "Happy": "Contento", 
        "Holidays": "Vacanze"
        };

/// Spanish Button ///        

const translatedSpanishText = () => {
   let inputText = document.getElementById('textArea').value;
   let inputWords = inputText.split(' ');
   for (i = 0; i < inputWords.length; i++) {
      console.log(spanish[inputWords[i]]); 
   }
};

const spanishButton = document.getElementById('Spanish');
spanishButton.addEventListener("click", translatedSpanishText);

/// French Button ///

const translatedFrenchText = () => {
    let inputText = document.getElementById('textArea').value;
    let inputWords = inputText.split(' ');
    for (i = 0; i < inputWords.length; i++) {
       console.log(french[inputWords[i]]); 
    }
 };
 
 const frenchButton = document.getElementById('French');
 frenchButton.addEventListener("click", translatedFrenchText);

 /// Italian Button ///


