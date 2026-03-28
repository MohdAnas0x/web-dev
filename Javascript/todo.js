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

// let li = document.querySelector('li');

ul.addEventListener("click", function(event) {
    console.log(event.target.nodeName);
    console.log("clicked");

    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

// let btndel = document.querySelectorAll('.delete');

// for(delbtn of btndel) {
//     delbtn.addEventListener('click', function() {
//         let par = this.parentElement;
//         par.remove();
//     });
// }
