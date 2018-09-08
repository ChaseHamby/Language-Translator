
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

let output = '';
const translatedSpanishText = () => {
   let inputText = document.getElementById('textArea').value;
   let inputWords = inputText.split(' ');
   for (i = 0; i < inputWords.length; i++) {
    output = (spanish[inputWords[i]]); 
   }
   printToDom(output,'emptyDiv');
};

const spanishButton = document.getElementById('Spanish');
spanishButton.addEventListener("click", translatedSpanishText);

/// French Button ///

const translatedFrenchText = () => {
    let inputText = document.getElementById('textArea').value;
    let inputWords = inputText.split(' ');
    for (i = 0; i < inputWords.length; i++) {
       output = (french[inputWords[i]]); 
    }
    printToDom(output,'emptyDiv');
 };
 
 const frenchButton = document.getElementById('French');
 frenchButton.addEventListener("click", translatedFrenchText);

 /// Italian Button ///

 const translatedItalianText = () => {
    let inputText = document.getElementById('textArea').value;
    let inputWords = inputText.split(' ');
    for (i = 0; i < inputWords.length; i++) {
       output= (italian[inputWords[i]]); 
    }
    printToDom(output,'emptyDiv');
 };
 
 const italianButton = document.getElementById('Italian');
 italianButton.addEventListener("click", translatedItalianText);

