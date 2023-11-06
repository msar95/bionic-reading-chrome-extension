function modifyTextInParagraphs() {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((paragraph) => {
        const words = paragraph.textContent.split(' ');

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            let modifiedWord = word;

            if (word.length === 1) {
                modifiedWord = `<b>${word}</b>`;
            } else if (word.length >= 2 && word.length <= 5) {
                modifiedWord = `<b>${word.slice(0, 2)}</b>${word.slice(2)}`;
            } else if (word.length >= 6 && word.length <= 7) {
                modifiedWord = `<b>${word.slice(0, 3)}</b>${word.slice(3)}`;
            } else if (word.length >= 8 && word.length <= 9) {
                modifiedWord = `<b>${word.slice(0, 4)}</b>${word.slice(4)}`;
            } else if (word.length >= 10 && word.length <= 12) {
                modifiedWord = `<b>${word.slice(0, 5)}</b>${word.slice(5)}`;
            } else if (word.length >= 13) {
                modifiedWord = `<b>${word.slice(0, 6)}</b>${word.slice(6)}`;
            }

            words[i] = modifiedWord;
        }

        paragraph.innerHTML = words.join(' ');
    });
}
modifyTextInParagraphs();


