/*const button = document.getElementById('claudeSubmit');
button.addEventListener('click', e => {
    let element = document.getElementById('claudeOutput');
    element.innerText = 'You said: ' + document.getElementById('claudeInput').value;
})*/

function clicked() {
    document.title = document.getElementById('claudeInput').value;
}

function button1() {
    let val = JSON.parse(document.getElementById('button1').innerText) + 1;

    document.getElementById('button1').innerText = val;
    localStorage.setItem('button1', JSON.stringify(val));
}

function button2() {
    let val = JSON.parse(document.getElementById('button2').innerText) + 1;
    document.getElementById('button2').innerText = val;
    sessionStorage.setItem('button2', JSON.stringify(val));
}

function loading() {
    if (localStorage.getItem('button1')) {
        document.getElementById('button1').innerText = JSON.parse(localStorage.getItem('button1'));
    } else {
        localStorage.setItem('button1', JSON.stringify(0));
    }

    if (sessionStorage.getItem('button2')) {
        document.getElementById('button2').innerText = JSON.parse(sessionStorage.getItem('button2'));
    } else {
        sessionStorage.setItem('button2', JSON.stringify(0));
    }
}

