document.getElementById('submit').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    const response = generateResponse(input);
    document.getElementById('response').innerText = response;
});

function generateResponse(input) {
    // Simple AI logic to respond to the input
    if (input.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (input.toLowerCase().includes('how are you')) {
        return 'I am just a simple AI, but I am functioning as expected!';
    } else {
        return 'Hi Bruno! Stop Pestering me!';
    }
}
