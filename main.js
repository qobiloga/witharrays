
const main = document.querySelector('.main');

for(let i = 0; i < taomlar.length; i++){
    let mydiv = document.createElement('div');
    mydiv.classList.add('box');

    let h = document.createElement('h3');
    h.classList.add('h3');
    h.textContent = taomlar[i].nom;

    let narx = document.createElement('div');
    narx.classList.add('age');
    let taom = taomlar[i].narx + ' so`m';
    narx.textContent = taom;


    let matn = document.createElement('div');
    matn.classList.add('matn');
    matn.textContent = taomlar[i].matn;

    let tur = document.createElement('button');
    tur.classList.add('btn');
    tur.textContent = taomlar[i].tur;


    let img = document.createElement('img');
    img.classList.add('img');
    img.src = taomlar[i].rasm;



    // mydiv.appendChild(h);
    // mydiv.appendChild(p1);
    mydiv.appendChild(narx);

    mydiv.appendChild(img);

    let right = document.createElement('div');
    right.classList.add('right');

    let name = document.createElement('div');
    name.classList.add('name');
    name.appendChild(h);
    name.appendChild(narx);
    right.appendChild(name);
    right.appendChild(matn);
    right.appendChild(tur);
//   right.appendChild(h); 
//   right.appendChild(p1);
//   right.appendChild(narx);
  mydiv.appendChild(right);

main.appendChild(mydiv);


}