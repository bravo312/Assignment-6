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
