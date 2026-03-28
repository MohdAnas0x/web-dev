let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');


btn.addEventListener('click', function() {
    let item = document.createElement('li');
    
    console.log(inp.value);
    item.innerText = inp.value;
    ul.appendChild(item);

    let delbtn = document.createElement('button');
    delbtn.innerText = "x";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);

    inp.value = "";     // to remove the text after submit 

});

let btndel = document.querySelector('.delete');
