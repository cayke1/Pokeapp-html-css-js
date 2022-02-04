const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const btn = document.getElementById('btn-1');
const btn_name = document.getElementById('btn-name');
const namer = document.getElementById('namer');
const img = document.querySelector('img');
const reload = document.getElementById('reload');
const counter = document.getElementById('counter');
const bs = document.getElementById('bs');
let count = 0;
let pokemon,
    fota,
    best

window.onload = master(), showBest();

btn_name.addEventListener('click', () => {
    NomeS = namer.value;
    if (NomeS.length >= 1) {
        localStorage.setItem('nome', NomeS);
    }
})
function master() {
    fetch(baseUrl + (Math.floor(Math.random() * 150) + 1), {
        method: 'GET',
    })

        .then(function (response) {
            response.json().then(data => {
                pokemon = data.forms[0].name;
                fota = data.sprites.other['official-artwork'].front_default;
                img.setAttribute('src', fota);
                counter.innerHTML = count;
            });
        });
}

btn.addEventListener('click', () => {
    const resposta = (document.getElementById('response').value).toLowerCase();
    if (resposta == pokemon) {
        Swal.fire({
            icon: 'success',
            title: "You done, it's " + pokemon
        });
        count = count + 100;
        master();
        localStorage.setItem('best', count);
        showBest();
        document.getElementById('response').value = "";
    } else {
        Swal.fire({
            icon: 'error',
            title: "It's " + pokemon,
            text: 'Your streak was ' + count
        });
        count = 0;
        master();
        // nome = localStorage.getItem('nome');
        // numberbest = parseInt(best);
        // var dados = {
        //     nome: nome,
        //     best: numberbest
        // }
        // if (nome != null && best > 0) {
        //     sendPlacar(dados);
        // }

        document.getElementById('response').value = "";
    }
})

reload.addEventListener('click', () => {
    master();
    count = 0;
    setTimeout(() => {
        reload.classList.add('fa-spin');
        setTimeout(() => {
            reload.classList.remove('fa-spin');
        }, 950);
    }, 10);
})

function showBest() {
    best = localStorage.getItem('best');
    if (best != null & best != undefined) {
        bs.innerHTML = 'Your best streak is: ' + best;
    } else {
        bs.innerHTML = 'Your best streak is : 0'
    }
}