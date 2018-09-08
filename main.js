let translator = {
    spanish: [
        {english: "Season", translation: "Temporada"},
        {english: "Greetings", translation: "Saludos"},
        {english: "and", translation: "y"},
        {english: "Happy", translation: "Contento"},
        {english: "Holidays", translation: "Vacaciones"},
    ]





const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

