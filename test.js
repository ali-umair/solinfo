const clear = document.querySelector('#clear');
const select = document.querySelector('#underline_select');
const comets = [
    {
    "id": "sl9",
    "name": "Shoemaker-Levy 9"
    },
    {
    "id": "hyakutake",
    "name": "Hyakutake"
    },
    {
    "id": "halley",
    "name": "Comète de Halley"
    },
    {
    "id": "c2020f3-neowise",
    "name": "C/2020 F3 (NEOWISE)"
    }
];

clear.addEventListener('click', ()=>{
    select.innerHTML = '';
    for(let i = 0; i<comets.length; i++) {
        select.innerHTML += `<option value='${comets[i].id}'>${comets[i].name}</option>\n`
    }
    console.log(select.innerHTML);
})