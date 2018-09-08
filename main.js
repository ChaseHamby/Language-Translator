const translator = {
    spanish: 
        {"Season":"Temporada","Greetings":"Saludos","and":"y","Happy":"Contento","Holidays": "Vacaciones"},
    french: 
        {"Season": "Saison","Greetings": "Salutations","and": "et","Happy": "Content","Holidays": "Vacances"},
    italian: [
        {"Season": "Stagione","Greetings": "Saluti","and": "e","Happy": "Contento","Holidays": "Vacanze"}


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};


let spanishText = () => {
    for (i = 0; 1 < translator.spanish.length; i++) {
        if (translator.spanish[i] === english){
            printToDom(translator.spanish[i])
        } else printToDom ("Wrong!");
    }
};


