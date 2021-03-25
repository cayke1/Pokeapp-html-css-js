var modal = document.getElementById('myModal');
var btn2 = document.getElementById('btn-2');
var span = document.getElementsByClassName('close')[0];

// window.onload = function (){
//     modal.style.display = 'block';
// }

btn2.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}