let translator = {
    spanish: [
        {english: "Season", translation: "Temporada"},
        {english: "Greetings", translation: "Saludos"},
        {english: "and", translation: "y"},
        {english: "Happy", translation: "Contento"},
        {english: "Holidays", translation: "Vacaciones"},
    ],
    french: [
        {english: "Season", translation: "Saison"},
        {english: "Greetings", translation: "Salutations"},
        {english: "and", translation: "et"},
        {english: "Happy", translation: "Content"},
        {english: "Holidays", translation: "Vacances"},
    ],
    italian: [
        {english: "Season", translation: "Stagione"},
        {english: "Greetings", translation: "Saluti"},
        {english: "and", translation: "e"},
        {english: "Happy", translation: "Contento"},
        {english: "Holidays", translation: "Vacanze"},
    ],
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

