var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById('btn-2');
var btnName = document.getElementById('btn-name');
var span = document.getElementsByClassName('close')[1];
var closeButton = document.getElementById('closeModal2');
var nick = localStorage.getItem('nome');

window.onload = function() {
    modal.style.display = 'block';
    if (nick === null) {
        modal2.style.display = 'block';
    }
}

btn2.onclick = function() {
    modal.style.display = 'block';
}

btnName.onclick = function() {
    modal2.style.display = 'none';
}

closeButton.onclick = function() {
    modal2.style.display = 'none';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}