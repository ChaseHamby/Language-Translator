<<<<<<< HEAD
const translator = {
    spanish: 
        {"Season":"Temporada","Greetings":"Saludos","and":"y","Happy":"Contento","Holidays": "Vacaciones"},
    french: 
        {"Season": "Saison","Greetings": "Salutations","and": "et","Happy": "Content","Holidays": "Vacances"},
    italian: [
        {"Season": "Stagione","Greetings": "Saluti","and": "e","Happy": "Contento","Holidays": "Vacanze"}


=======
>>>>>>> 2a98d56363f76419e03658dc66237f66aa2e0a4b
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

<<<<<<< HEAD

let spanishText = () => {
    for (i = 0; 1 < translator.spanish.length; i++) {
        if (translator.spanish[i] === english){
            printToDom(translator.spanish[i])
        } else printToDom ("Wrong!");
    }
};

=======
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

>>>>>>> 2a98d56363f76419e03658dc66237f66aa2e0a4b

