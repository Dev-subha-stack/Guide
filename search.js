window.onload = function () {

    const searchBar = document.querySelector(".searchbar");

    const suggestions = [
     "Vectors",
     "Mathematical Induction",
     "Ionic Equillibrium",
     "Euclid's Lemma",
     "Matrices",
     "Complex Numbers",
    ];

    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        const text = suggestions[textIndex];

        if (charIndex <= text.length) {
            searchBar.placeholder = text.substring(0, charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(deleteText, 1500);
        }
    }

    function deleteText() {
        const text = suggestions[textIndex];

        if (charIndex >= 0) {
            searchBar.placeholder = text.substring(0, charIndex);
            charIndex--;
            setTimeout(deleteText, 50);
        } else {
            textIndex = (textIndex + 1) % suggestions.length;
            setTimeout(typeText, 300);
        }
    }

    typeText();
};