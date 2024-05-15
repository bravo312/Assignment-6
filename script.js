document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
    
    // textArea
    const textarea = document.createElement('textarea');
    textarea.id = 'inputText';
    textarea.placeholder = 'Enter text here...';
    textarea.rows = 10; // rows
    textarea.cols = 50; // columns

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Analyze Text';
    submitButton.onclick = processText;

    root.appendChild(textarea);
    root.appendChild(submitButton);
});

function processText(){
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\s+/);
    const frequency = {};

    // word frequency
    words.forEach(word => {
        word = word.toLowerCase();
        if (word) {
            frequnecy[word] = (frequency[word] || 0) + 1;
        }
    });

    // sort by frequency and alphabetically
    const srotedWords = Object.keys(frequency).sort((a, b) => {
        return frequency[b] - frequency[a] || a.localeCompare(b);
    });

    displayTopWords(sortedWords.slice(0,5), frequency);

}