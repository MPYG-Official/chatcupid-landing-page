document.addEventListener('DOMContentLoaded', function () {
    const dynamicText = document.getElementById('dynamic-text');
    const words = ['boldly', 'creatively', 'confidently'];
    let index = 0;
    let charIndex = 0;

    function typeWord() {
        if (charIndex < words[index].length) {
            dynamicText.textContent += words[index][charIndex];
            charIndex++;
            setTimeout(typeWord, 150);
        } else {
            setTimeout(deleteWord, 1000);
        }
    }

    function deleteWord() {
        if (charIndex > 0) {
            dynamicText.textContent = dynamicText.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteWord, 100);
        } else {
            index = (index + 1) % words.length;
            setTimeout(typeWord, 500);
        }
    }

    typeWord();
});
