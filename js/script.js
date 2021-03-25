const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const btn = document.getElementById('btn-1');
const img = document.querySelector('img');
const reload = document.getElementById('reload');
const counter = document.getElementById('counter');
// let count = 0;

window.onload = master(Math.floor(Math.random()*897) +1);

function master (num) {
    fetch(baseUrl + num, {
        method: 'GET',
    })
    
    .then(function(response){
        response.json().then(data => {
            pokemon = data.forms[0].name;
            fota = data.sprites.other['official-artwork'].front_default;
            img.setAttribute('src', fota);
            // console.log(pokemon);
            reload.addEventListener('click', () => { 
                master(Math.floor(Math.random()*897) +1);
                count = count * 0;
            })
            btn.addEventListener('click', () => {
                const resposta = document.getElementById('response').value;
                    if (resposta == pokemon) {
                        Swal.fire({
                            icon: 'success',
                            title: "You done, it's " + pokemon
                          });
                        //   count +=1;
                        master(Math.floor(Math.random()*897) +1);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: "It's " + pokemon
                          });
                        //   count = count * 0;
                        master(Math.floor(Math.random()*897) +1);
                    }
                // counter.innerHTML= count;
            })
        });
        
        
    });
}