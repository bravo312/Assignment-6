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
    const words = inputText.replace(/[^\w\s]|_/g, "")
                            .replace(/\s+/g, " ")
                            .toLowerCase()
                            .split(" ");
    const frequency = {};

    // word frequency
    words.forEach(word => {
        word = word.toLowerCase();
        if (word) {
            frequency[word] = (frequency[word] || 0) + 1;
        }
    });

    // sort by frequency and alphabetically
    const sortedWords = Object.keys(frequency).sort((a, b) => {
        return frequency[b] - frequency[a] || a.localeCompare(b);
    });

    displayTopWords(sortedWords.slice(0,5), frequency);

}

function displayTopWords(words, freq) {
    const results = document.createElement('table');
    const headerRow = results.insertRow();
    headerRow.insertCell().textContent = 'Word';
    headerRow.insertCell().textContent = 'Frequency';

    words.forEach(word => {
        const row = results.insertRow();
        row.insertCell().textContent = word;
        row.insertCell().textContent = freq[word];
    });

    const root = document.getElementById('root');
    root.appendChild(results);
}
