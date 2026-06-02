const button = document.getElementById('actionBtn');
const messageArea = document.getElementById('messageArea');
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    button.textContent = `Klikni na mě! (${clickCount})`;
    
    messageArea.classList.remove('hidden');
    
    if (clickCount === 1) {
        messageArea.textContent = 'Výborně! JavaScript funguje.';
    } else if (clickCount === 5) {
        messageArea.textContent = 'Už jsi kliknul pětkrát, dobrá práce!';
        button.classList.replace('bg-blue-600', 'bg-green-600');
        button.classList.replace('hover:bg-blue-500', 'hover:bg-green-500');
    } else if (clickCount >= 10) {
        messageArea.textContent = 'Naklikáno! Jsi mistr tester.';
    }
});
