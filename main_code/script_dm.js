const dialog = document.getElementById('dialog');
const content = document.getElementById('content');
const close = document.getElementById('close');

document.getElementById('potato').addEventListener('click', () => {
    document.getElementById('1').style.display = 'block';
    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    dialog.style.display = 'block';
});

document.getElementById('carrot').addEventListener('click', () => {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'block';
    document.getElementById('3').style.display = 'none';
    dialog.style.display = 'block';
});

document.getElementById('cabbage').addEventListener('click', () => {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'block';
    dialog.style.display = 'block';
});

document.addEventListener('click', (event) => {
    if (event.target === dialog) {
        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = 'none';
        dialog.style.display = 'none';
    }
});

// function toggleLightMode() {
//     window.location.href = '../main.html';
// }

// document.getElementById('lightModeButton').addEventListener('click', toggleLightMode);