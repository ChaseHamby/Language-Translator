
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const spanish =
        {"Season": "Temporada ",
        "Greetings": "Saludos ", 
        "And": "y ",
        "Happy": "Contento ", 
        "Holidays": "Vacaciones "
        };
 
const french =
        {"Season": "Saison ",
        "Greetings": "Salutations ", 
        "And": "et ",
        "Happy": "Content ", 
        "Holidays": "Vacances "
        };

const italian =
        {"Season": "Stagione ",
        "Greetings": "Saluti ", 
        "And": "e ",
        "Happy": "Contento ", 
        "Holidays": "Vacanze "
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

/// Random Button ///

// const translatedText = () => {
//     let inputText = document.getElementById('textArea').value;
//     let inputWords = inputText.split(' ');
//     for (i = 0; i < inputWords.length; i++) {
//        output= (italian.french.spanish[inputWords[i]]); 
//     }
//     printToDom(output,'emptyDiv');
//  };

//  const randomButton = document.getElementById('Random');
//  randomButton.addEventListener("click", translatedText);